import create from "zustand";
import { TimeRecord } from "../types/timeTypes";
import { formatStandardDate } from "../utils/abstractTimeUtils";
import { createEndTime, createStartTime } from "../utils/timesArrayUtils";

interface TimesState {
  times: TimeRecord[];
  todaysDate: string;
  setTimes: (newTimes: TimeRecord[]) => void;
  addNewStartTime: (id: string, date: string) => void;
  setEndTime: (id: string, date: string, startTime: string) => void;
}

export const useStore = create<TimesState>((set) => ({
  times: [],
  todaysDate: formatStandardDate(new Date()),
  setTimes: (newTimes: TimeRecord[]) => {
    set((state) => ({
      times: newTimes,
    }));
  },
  addNewStartTime: (id: string, date: string) => {
    set((state) => ({
      times: createStartTime(id, state.times, date) || [],
    }));
  },
  setEndTime: (id: string, date: string, startTime: string) => {
    set((state) => ({
      times: createEndTime(id, state.times, date, startTime) || [],
    }));
  },
}));
