// Interfaces for settings functionality
interface ISettings {
  name: string;
  isEnabled: boolean;
  execute(...args: unknown[]): Promise<void>;
  getPermission(): Promise<unknown>;
}

interface ISettingsManager {
  getSettings(): Record<string, ISettings>;
  saveSettings(): void;
  restoreSettings(): void;
  requestPermissions(): Promise<unknown[]>;
}

// Base settings implementation
abstract class BaseSettings implements ISettings {
  protected constructor(
    public readonly name: string,
    protected enabled: boolean = false
  ) {}

  get isEnabled(): boolean {
    return this.enabled;
  }

  set isEnabled(value: boolean) {
    this.enabled = value;
  }

  async execute(...args: unknown[]): Promise<void> {
    if (!this.enabled) return;
    await this.handleExecute(...args);
  }

  abstract getPermission(): Promise<unknown>;
  protected abstract handleExecute(...args: unknown[]): Promise<void>;

  toJSON() {
    return {
      name: this.name,
      isEnabled: this.enabled,
    };
  }
}

// Concrete settings implementations
class VibrateSettings extends BaseSettings {
  constructor() {
    super("vibrate");
  }

  async getPermission(): Promise<void> {
    return;
  }

  protected async handleExecute(): Promise<void> {
    if (navigator.vibrate) {
      navigator.vibrate([300, 150, 300]);
    }
  }
}

class NotificationSettings extends BaseSettings {
  constructor(private readonly title: string) {
    super("pushNotification");
  }

  async getPermission(): Promise<NotificationPermission> {
    return Notification.requestPermission();
  }

  protected async handleExecute(text: string): Promise<void> {
    const registration = await navigator.serviceWorker.getRegistration();

    if (!registration) {
      console.warn("Service worker not found");

      return;
    }

    await registration.showNotification(this.title, {
      body: text,
      icon: "/icon-192x192.png",
      badge: "/badge-icon.png",
    });
  }
}

// Settings manager implementation
class SettingsManager implements ISettingsManager {
  private readonly settings: Record<string, ISettings> = {};

  constructor(private readonly appName: string) {
    this.initializeSettings();
  }

  private initializeSettings(): void {
    this.settings.vibrate = new VibrateSettings();
    this.settings.pushNotification = new NotificationSettings(this.appName);
  }

  getSettings(): Record<string, ISettings> {
    return this.settings;
  }

  async requestPermissions(): Promise<unknown[]> {
    if (typeof window === "undefined") return [];

    return Promise.all(
      Object.values(this.settings).map((settings) => settings.getPermission())
    );
  }

  saveSettings(): void {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      "settings",
      JSON.stringify(Object.values(this.settings))
    );
  }

  restoreSettings(): void {
    if (typeof window === "undefined") return;

    const savedSettings = JSON.parse(
      localStorage.getItem("settings") || "[]"
    ) as ISettings[];

    savedSettings.forEach((saved) => {
      const setting = this.settings[saved.name];
      if (setting) {
        setting.isEnabled = saved.isEnabled;
      }
    });
  }
}

// Main App class using singleton pattern
export class App {
  private static instance: App | null = null;
  private readonly settingsManager: ISettingsManager;

  private constructor() {
    this.settingsManager = new SettingsManager("zenFit");
  }

  static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }

  get settings(): Record<string, ISettings> {
    return this.settingsManager.getSettings();
  }

  async requestPermissions(): Promise<unknown[]> {
    return this.settingsManager.requestPermissions();
  }

  requestNoSleep(): Promise<WakeLockSentinel | null> {
    if (navigator.wakeLock) {
      return navigator.wakeLock.request("screen");
    }

    return Promise.resolve(null);
  }

  saveSettings(): void {
    this.settingsManager.saveSettings();
  }

  restoreSettings(): void {
    this.settingsManager.restoreSettings();
  }
}
