import { compareAsc, format, isEqual, isSameDay } from "date-fns";
import { DateTimeSet, TimeRecord, TimeSet } from "../types/timeTypes";

export const getMostRecentTimeByDate = (
  dateTimes: DateTimeSet[],
  date: string
) => {
  const dateTimesByGivenDate = dateTimes.find((dt) => dt.date === date);

  if (!dateTimesByGivenDate) {
    return null;
  }
  const sortedByDate = sortTimesByDate(dateTimesByGivenDate.timeSets);

  return sortedByDate[sortedByDate.length - 1];
};

export const sortTimesByDate = (timeSets: TimeSet[]) => {
  timeSets.sort((a, b) =>
    compareAsc(new Date(a.startTime), new Date(b.startTime))
  );

  return timeSets;
};

export const sortTimesByName = (times: TimeRecord[]) => {
  console.log("\x1b[42m%s \x1b[0m", "FIXME: [matt] times", times);
  if (!times) {
    return [];
  }
  times.sort((a, b) => a.label.localeCompare(b.label));

  return times;
};

export const formatToTime = (dateTime?: Date) => {
  return !!dateTime ? format(dateTime, "hh:mm:ss") : "";
};

export const formatStandardDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

export const getTimeItem = (times: TimeRecord[], id: string) => {
  return times.find((item) => item.id === id);
};

export const filterOutTimeItem = (times: TimeRecord[], id: string) => {
  return times.filter((item) => item.id !== id);
};

export const findDateInTimeItem = (timeItem: TimeRecord, date: string) => {
  return timeItem.times.find((x) => x.date === date);
};

export const findIndexOfStartTime = (
  dateTimeSet: DateTimeSet,
  startTime: string
) => {
  return dateTimeSet?.timeSets.findIndex((x) => x.startTime === startTime);
};
