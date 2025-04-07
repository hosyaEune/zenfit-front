abstract class Settings {
  isEnabled = false;

  onChange(isEnabled: boolean) {
    this.isEnabled = isEnabled;
  }

  execute(...args: unknown[]) {
    if (!this.isEnabled) return;

    this._execute(...args);
  }

  abstract getPermission(): Promise<unknown>;
  protected abstract _execute(...args: unknown[]): Promise<void>;
}

class Vibrate extends Settings {
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
  vibrate: Vibrate;
  pushNotification: PushNotification;
  private static instance: App;

  constructor() {
    this.vibrate = new Vibrate();
    this.pushNotification = new PushNotification(this.appName);
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

    const permissions: Promise<unknown>[] = [
      this.pushNotification.getPermission(),
      this.vibrate.getPermission(),
    ];

    return Promise.all(permissions);
  }

  public requestNoSleep() {
    if (navigator.wakeLock) {
      navigator.wakeLock.request("screen");
    }
  }
}
