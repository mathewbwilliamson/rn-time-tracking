import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { seedData } from "../../services/seedData";
import { TimeRecord, TimeSet } from "../../types/timeTypes";
import {
  filterOutTimeItem,
  findDateInTimeItem,
  findIndexOfStartTime,
  formatToTime,
  getTimeItem,
  sortTimesByName,
} from "../../utils/timeUtils";
import { View } from "../Themed";
import TimeItem from "./TimeItem";

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
  const relevantTimes = findDateInTimeItem(timeItem, date);

  if (!relevantTimes) {
    return;
  }
  const newTime: TimeSet = { startTime: formatToTime(new Date()) };

  relevantTimes.timeSets.push(newTime);

  const filterOutRelevant = filterOutTimeItem(times, id);

  const newItem: TimeRecord = {
    id: timeItem.id,
    label: timeItem.label,
    times: [...timeItem.times.filter((x) => x.date !== date), relevantTimes],
  };
  return [...filterOutRelevant, newItem];
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

  const filterOutRelevant = filterOutTimeItem(times, id);

  const newItem: TimeRecord = {
    id: timeItem.id,
    label: timeItem.label,
    times: [...timeItem.times.filter((x) => x.date !== date), relevantTimes],
  };

  return [...filterOutRelevant, newItem];
};

export default function TimesContainer({ path }: { path: string }) {
  const [times, setTimes] = React.useState<TimeRecord[]>();
  const { getItem, setItem } = useAsyncStorage("@times");

  React.useEffect(() => {
    // const data = seedData;
    getItem((err, result) => setTimes(JSON.parse(result || "")));
    // setTimes(data);
    console.log("\x1b[41m%s \x1b[0m", "FIXME: [matt] MOUNT");
  }, []);

  React.useEffect(() => {
    if (!!times) {
      setItem(JSON.stringify(times));
    }
  }, [times]);

  const setEndTime = (id: string, date: string, startTime: string) => {
    const updatedTimes = createEndTime(id, times || [], date, startTime);
    setTimes(updatedTimes);
  };

  const addNewStartTime = (id: string, date: string) => {
    const updatedTimes = createStartTime(id, times || [], date);
    setTimes(updatedTimes);
  };

  console.log("\x1b[41m%s \x1b[0m", "FIXME: [matt] RENDER times", times);

  return (
    <View style={styles.getStartedContainer}>
      {/* <Text style={styles.getStartedText}>
        Open up the code for this screen: this is a test
      </Text> */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={sortTimesByName(times || [])}
        renderItem={({ item }) => {
          console.log("\x1b[42m%s \x1b[0m", "FIXME: [matt] item", item);
          return (
            <TimeItem
              timeElement={item}
              setEndTime={setEndTime}
              addNewStartTime={addNewStartTime}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    // alignItems: "center",
    // height: "100%",
  },
  getStartedText: {
    fontSize: 16,
    lineHeight: 24,
    // textAlign: "center",
  },
});
