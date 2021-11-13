export interface TimeSet {
  startTime: string;
  endTime?: string;
}

export interface DateTimeSet {
  date: string;
  timeSets: TimeSet[];
}

export interface TimeRecord {
  id: string;
  label: string;
  times: DateTimeSet[];
}
