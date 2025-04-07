export class App {
  appName = "zenFit";
  private static instance: App;

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }

  public async requestPermissions() {
    const permissions: Promise<unknown>[] = [Notification.requestPermission()];

    return Promise.all(permissions);
  }

  public async pushNotify(text: string) {
    const registration = await navigator.serviceWorker.getRegistration();

    if (!registration) {
      console.log("Сервис-воркер не найден");

      return;
    }

    registration.showNotification(this.appName, {
      body: text,
      //   TODO: добавить картинки
      icon: "/icon-192x192.png",
      badge: "/badge-icon.png",
    });
  }

  public requestNoSleep() {
    if (navigator.wakeLock) {
      navigator.wakeLock.request("screen");
    }
  }

  public vibrate() {
    if (navigator.vibrate) {
      navigator.vibrate([300, 150, 300]); // вибрация 200мс, пауза 100мс, вибрация 200мс
    }
  }
}
