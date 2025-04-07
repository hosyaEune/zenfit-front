export class TimeHelper {
  static formatDuration(time: number) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    const secondsStr = `${seconds}`.padStart(2, "0");
    if (hours === 0) {
      return `${minutes}:${secondsStr}`;
    } else {
      const minutesStr = `${minutes}`.padStart(2, "0");

      return `${hours}:${minutesStr}:${secondsStr}`;
    }
  }

  static getSeconds(durationSecornds: number) {
    return Math.floor(durationSecornds % 60);
  }
  static getMinutes(durationSecornds: number) {
    return Math.floor(durationSecornds / 60) % 60;
  }
  static getHours(durationSecornds: number) {
    return Math.floor(durationSecornds / 3600);
  }
}
