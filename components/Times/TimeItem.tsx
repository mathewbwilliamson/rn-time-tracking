import React from "react";
import { Button, StyleSheet } from "react-native";
import { TimeRecord } from "../../types/timeTypes";
import { getMostRecentTimeByDate } from "../../utils/timeUtils";
import { Text, View } from "../Themed";

export default function TimeItem({
  timeElement,
  setEndTime,
  addNewStartTime,
}: {
  timeElement: TimeRecord;
  setEndTime: (id: string, date: string, startTime: string) => void;
  addNewStartTime: (id: string, date: string) => void;
}) {
  // FIXME: [matt] TODO: Get the date here working so that it is current
  const recentTimeSet = getMostRecentTimeByDate(
    timeElement.times,
    "2021-11-11"
  );

  return (
    <View style={styles.getStartedContainer}>
      <Text>{timeElement.label}</Text>
      <Text>{recentTimeSet?.startTime}</Text>
      <Text>{recentTimeSet?.endTime}</Text>
      <Button
        onPress={() => {
          console.log("\x1b[42m%s \x1b[0m", "FIXME: [matt] hit");
          if (!recentTimeSet?.endTime) {
            setEndTime(
              timeElement.id,
              "2021-11-11",
              recentTimeSet?.startTime || ""
            );
          } else {
            addNewStartTime(timeElement.id, "2021-11-11");
          }
        }}
        title={"Log"}
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
    // fontSize: 16,
    // lineHeight: 24,
    // textAlign: "center",
  },
});
