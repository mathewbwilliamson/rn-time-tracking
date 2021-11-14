import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useStore } from "../../stores/timesStore";
import { sortTimesByName } from "../../utils/abstractTimeUtils";
import { View } from "../Themed";
import TimeItem from "./TimeItem";

export default function TimesContainer({ path }: { path: string }) {
  const { times, todaysDate, addNewStartTime, setEndTime } = useStore();

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
