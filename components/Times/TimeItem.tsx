import { parseISO } from "date-fns";
import React from "react";
import { Button, StyleSheet } from "react-native";
import {
  primaryActionColor,
  secondaryActionColor,
  standardSpacing,
  secondaryBackgroundColor,
  backgroundColor,
  basicFontSize,
} from "../../styles/styleVariables";
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
  const isActive = !recentTimeSet?.endTime && !!recentTimeSet?.startTime;
  return (
    <View style={styles.timeItemContainer}>
      <Text style={styles.timeHeader}>{timeElement.label}</Text>
      <View style={styles.timeGroup}>
        <Text style={styles.startTimeSet}>{recentTimeSet?.startTime}</Text>
        <Text style={styles.endTimeSet}>{recentTimeSet?.endTime}</Text>
      </View>
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
        title={isActive ? "Stop Activity" : "Start Activity"}
        color={isActive ? primaryActionColor : secondaryActionColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timeItemContainer: {
    justifyContent: "center",
    width: "100%",
    paddingBottom: standardSpacing,
    borderBottomColor: secondaryBackgroundColor,
    borderBottomWidth: standardSpacing,
    backgroundColor,
  },
  timeHeader: {
    paddingTop: 12,
    backgroundColor,
    paddingBottom: standardSpacing / 2,
    alignSelf: "center",
    fontSize: basicFontSize * 1.2,
    fontWeight: "500",
  },
  timeGroup: {
    paddingBottom: basicFontSize,
    backgroundColor,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  startTimeSet: {
    width: "50%",
    textAlign: "center",
    fontSize: basicFontSize,
  },
  endTimeSet: {
    width: "50%",
    textAlign: "center",
    fontSize: basicFontSize,
  },
});
