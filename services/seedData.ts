import { TimeRecord } from "../types/timeTypes";
import { formatStandardDate, formatToTime } from "../utils/timeUtils";

export const seedData: TimeRecord[] = [
  {
    id: "test1",
    label: "Programming",
    times: [
      {
        date: "2021-11-10",
        timeSets: [
          {
            startTime: formatToTime(new Date(2021, 11, 10, 11, 22)),
            endTime: formatToTime(new Date(2021, 11, 10, 11, 44)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 12, 33)),
            endTime: formatToTime(new Date(2021, 11, 10, 14, 44)),
          },
        ],
      },
      {
        date: "2021-11-11",
        timeSets: [
          {
            startTime: formatToTime(new Date(2021, 11, 10, 11, 22)),
            endTime: formatToTime(new Date(2021, 11, 10, 11, 55)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 13, 23)),
            endTime: formatToTime(new Date(2021, 11, 10, 15, 44)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 16, 5)),
            endTime: "",
          },
        ],
      },
    ],
  },
  {
    id: "test2",
    label: "LNS-370",
    times: [
      {
        date: "2021-11-10",
        timeSets: [
          {
            startTime: formatToTime(new Date(2021, 11, 10, 10, 11)),
            endTime: formatToTime(new Date(2021, 11, 10, 10, 33)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 11, 55)),
            endTime: formatToTime(new Date(2021, 11, 10, 13, 34)),
          },
        ],
      },
      {
        date: "2021-11-11",
        timeSets: [
          {
            startTime: formatToTime(new Date(2021, 11, 10, 10, 13)),
            endTime: formatToTime(new Date(2021, 11, 10, 10, 45)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 12, 12)),
            endTime: formatToTime(new Date(2021, 11, 10, 14, 23)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 15, 7)),
            endTime: "",
          },
        ],
      },
    ],
  },
  {
    id: "test3",
    label: "Planning",
    times: [
      {
        date: "2021-11-10",
        timeSets: [
          {
            startTime: formatToTime(new Date(2021, 11, 10, 9, 11)),
            endTime: formatToTime(new Date(2021, 11, 10, 9, 33)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 11, 33)),
            endTime: formatToTime(new Date(2021, 11, 10, 12, 33)),
          },
        ],
      },
      {
        date: "2021-11-11",
        timeSets: [
          {
            startTime: formatToTime(new Date(2021, 11, 10, 9, 22)),
            endTime: formatToTime(new Date(2021, 11, 10, 9, 55)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 11, 23)),
            endTime: formatToTime(new Date(2021, 11, 10, 12, 33)),
          },
          {
            startTime: formatToTime(new Date(2021, 11, 10, 14, 2)),
            endTime: formatToTime(new Date(2021, 11, 10, 15, 5)),
          },
        ],
      },
    ],
  },
];
