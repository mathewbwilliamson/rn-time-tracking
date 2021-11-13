import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { TimeRecord } from "../../types/timeTypes";
import {
  formatStandardDate,
  sortTimesByName,
} from "../../utils/abstractTimeUtils";
import { createEndTime, createStartTime } from "../../utils/timesArrayUtils";
import { View } from "../Themed";
import TimeItem from "./TimeItem";

export default function TimesContainer({ path }: { path: string }) {
  const [times, setTimes] = React.useState<TimeRecord[]>();
  const [todaysDate] = React.useState<string>(() =>
    formatStandardDate(new Date())
  );
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
    <View style={styles.timesContainer}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={sortTimesByName(times || [])}
        renderItem={({ item }) => {
          return (
            <TimeItem
              timeElement={item}
              setEndTime={setEndTime}
              addNewStartTime={addNewStartTime}
              todaysDate={todaysDate}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timesContainer: {
    width: "100%",
  },
});
