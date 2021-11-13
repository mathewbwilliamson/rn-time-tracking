import { parseISO } from "date-fns";
import React from "react";
import { Button, StyleSheet } from "react-native";
import { TimeRecord } from "../../types/timeTypes";
import { formatStandardDate } from "../../utils/abstractTimeUtils";
import { getMostRecentTimeByDate } from "../../utils/timesArrayUtils";
import { Text, View } from "../Themed";

interface TimeItemProps {
  timeElement: TimeRecord;
  setEndTime: (id: string, date: string, startTime: string) => void;
  addNewStartTime: (id: string, date: string) => void;
  todaysDate: string;
}

export default function TimeItem({
  timeElement,
  setEndTime,
  addNewStartTime,
  todaysDate,
}: TimeItemProps) {
  const recentTimeSet = getMostRecentTimeByDate(timeElement.times, todaysDate);

  return (
    <View style={styles.getStartedContainer}>
      <Text>{timeElement.label}</Text>
      <Text>{recentTimeSet?.startTime}</Text>
      <Text>{recentTimeSet?.endTime}</Text>
      <Button
        onPress={() => {
          console.log("\x1b[42m%s \x1b[0m", "FIXME: [matt] hit");
          if (!recentTimeSet?.endTime && !!recentTimeSet?.startTime) {
            setEndTime(
              timeElement.id,
              todaysDate,
              recentTimeSet?.startTime || ""
            );
          } else {
            addNewStartTime(timeElement.id, todaysDate);
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
