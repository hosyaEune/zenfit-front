export class TimeHelper {
  static splitSeconds(time: number) {
    const seconds = TimeHelper.getSeconds(time);
    const minutes = TimeHelper.getMinutes(time);
    const hours = TimeHelper.getHours(time);

    return [hours, minutes, seconds] as const;
  }

  static formatDuration(time: number) {
    const [hours, minutes, seconds] = TimeHelper.splitSeconds(time);
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
