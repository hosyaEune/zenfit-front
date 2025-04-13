abstract class Settings {
  isEnabled = false;

  onChange(isEnabled: boolean) {
    this.isEnabled = isEnabled;
  }

  execute(...args: unknown[]) {
    if (!this.isEnabled) return;

    this._execute(...args);
  }

  abstract name: string;
  abstract getPermission(): Promise<unknown>;
  protected abstract _execute(...args: unknown[]): Promise<void>;

  toJSON() {
    return {
      name: this.name,
      isEnabled: this.isEnabled,
    };
  }
}

class Vibrate extends Settings {
  name = "vibrate";

  protected async _execute() {
    if (navigator.vibrate) {
      navigator.vibrate([300, 150, 300]); // вибрация 200мс, пауза 100мс, вибрация 200мс
    }
  }
  async getPermission() {
    return;
  }
}
class PushNotification extends Settings {
  name = "pushNotification";

  title: string;

  constructor(title: string) {
    super();
    this.title = title;
  }

  async getPermission() {
    return Notification.requestPermission();
  }

  protected async _execute(text: string) {
    const registration = await navigator.serviceWorker.getRegistration();

    if (!registration) {
      console.log("Сервис-воркер не найден");

      return;
    }

    registration.showNotification(this.title, {
      body: text,
      //   TODO: добавить картинки
      icon: "/icon-192x192.png",
      badge: "/badge-icon.png",
    });
  }
}

export class App {
  appName = "zenFit";

  settings: Record<string, Settings> = {};

  private static instance: App;

  constructor() {
    this.settings.vibrate = new Vibrate();
    this.settings.pushNotification = new PushNotification(this.appName);
  }

  public static getInstance(): App {
    if (!App.instance) {
      const app = new App();

      App.instance = app;
    }

    return App.instance;
  }

  public async requestPermissions() {
    if (typeof window === "undefined") return;

    const permissions: Promise<unknown>[] = Object.values(this.settings).map(
      (settings) => settings.getPermission()
    );

    return Promise.all(permissions);
  }

  public requestNoSleep() {
    if (navigator.wakeLock) {
      navigator.wakeLock.request("screen");
    }
  }

  public saveSettigns() {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      "settings",
      JSON.stringify(Object.values(this.settings))
    );
  }

  public restoreSettings() {
    if (typeof window === "undefined") return;

    const settings = JSON.parse(localStorage.getItem("settings") || "[]") as [
      Settings
    ];

    settings.forEach((s) => {
      if (this.settings[s.name]) {
        this.settings[s.name].isEnabled = s.isEnabled;
      }
    });
  }
}
