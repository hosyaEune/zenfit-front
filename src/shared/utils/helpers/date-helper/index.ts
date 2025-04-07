import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import isoWeek from "dayjs/plugin/isoWeek";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";

import "dayjs/locale/en";

dayjs.extend(weekday);
dayjs.extend(isoWeek);

dayjs.extend(calendar);
dayjs.extend(utc);

export class DateHelper {
  static now() {
    return dayjs();
  }

  static getDateDifferenceDays(startDate: Date, endDate: Date) {
    const secondsToEnd = endDate.getTime() - startDate.getTime();

    return secondsToEnd / (1000 * 3600 * 24);
  }

  static formatDateToStr(date: Date) {
    return date.toISOString().split("T")[0];
  }

  static addMonth(date: Date, value = 1) {
    return new Date(date.setMonth(date.getMonth() + value));
  }

  static addYear(date: Date, value = 1) {
    return new Date(new Date(date).setFullYear(date.getFullYear() + value));
  }

  static getAppDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    const localeName = "ru-RU";

    const defaultOptions: Intl.DateTimeFormatOptions = {
      month: "long",
      year: "numeric",
      day: "numeric",
    };

    const resultOptions = options ?? defaultOptions;

    return new Intl.DateTimeFormat(localeName, resultOptions).format(date);
  }

  static isDate(str: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Date(str) !== "Invalid Date" && !isNaN(new Date(str)); // eslint-disable-line no-constant-binary-expression
  }

  static getFullDate(date: dayjs.Dayjs) {
    return date.format("YYYY.MM.DD");
  }

  static formatDate(date: string | number | dayjs.Dayjs | Date) {
    dayjs.extend(calendar);
    dayjs.extend(utc);
    const dateDayJs = dayjs(date);

    return dayjs(dateDayJs).calendar(null, {
      sameDay: "[Today], MMM D",
      lastDay: "[Yesterday], MMM D",
      nextDay: "[Tommorow], MMM D",
      nextWeek: "YYYY.MM.DD",
      lastWeek: "YYYY.MM.DD",
      sameElse: "YYYY.MM.DD",
    });
  }
}
