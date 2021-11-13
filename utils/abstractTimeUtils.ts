import { compareAsc, format, isEqual, isSameDay } from "date-fns";
import { DateTimeSet, TimeRecord, TimeSet } from "../types/timeTypes";

export const sortTimesByDate = (timeSets: TimeSet[]) => {
  timeSets.sort((a, b) =>
    compareAsc(new Date(a.startTime), new Date(b.startTime))
  );

  return timeSets;
};

export const sortTimesByName = (times: TimeRecord[]) => {
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
