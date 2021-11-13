import { TimeRecord, DateTimeSet, TimeSet } from "../types/timeTypes";
import {
  formatStandardDate,
  formatToTime,
  sortTimesByDate,
} from "./abstractTimeUtils";

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

export const createNewDateTimeSet = (timeItem: TimeRecord, date: string) => {
  let relevantTimes = findDateInTimeItem(timeItem, date);

  const newTime: TimeSet = { startTime: formatToTime(new Date()) };

  if (!relevantTimes) {
    relevantTimes = {
      date: formatStandardDate(new Date()),
      timeSets: [newTime],
    };
  } else {
    relevantTimes.timeSets.push(newTime);
  }

  return relevantTimes;
};

export const addNewItemToTimes = (
  timeSet: DateTimeSet,
  timeItem: TimeRecord,
  times: TimeRecord[],
  id: string,
  date: string
) => {
  const filterOutRelevant = filterOutTimeItem(times, id);

  const newItem: TimeRecord = {
    id: timeItem.id,
    label: timeItem.label,
    times: [...timeItem.times.filter((x) => x.date !== date), timeSet],
  };

  return [...filterOutRelevant, newItem];
};

export const createStartTime = (
  id: string,
  times: TimeRecord[],
  date: string
) => {
  if (!times) {
    return;
  }

  const timeItem = getTimeItem(times, id);

  if (!timeItem) {
    return;
  }

  const relevantTimes = createNewDateTimeSet(timeItem, date);

  return addNewItemToTimes(relevantTimes, timeItem, times, id, date);
};

export const createEndTime = (
  id: string,
  times: TimeRecord[],
  date: string,
  startTime: string
) => {
  if (!times) {
    return;
  }

  const timeItem = getTimeItem(times, id);

  if (!timeItem) {
    return;
  }
  const relevantTimes = findDateInTimeItem(timeItem, date);

  if (!relevantTimes) {
    return;
  }

  const indexToChange = findIndexOfStartTime(relevantTimes, startTime);

  relevantTimes.timeSets[indexToChange].endTime = formatToTime(new Date());

  return addNewItemToTimes(relevantTimes, timeItem, times, id, date);
};
