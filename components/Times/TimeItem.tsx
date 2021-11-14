import React from "react";
import { Button, StyleSheet } from "react-native";
import {
  backgroundColor,
  basicFontSize,
  primaryActionColor,
  primaryTextColor,
  secondaryActionColor,
  secondaryBackgroundColor,
  standardSpacing,
} from "../../styles/styleVariables";
import { TimeRecord } from "../../types/timeTypes";
import { getMostRecentTimeByDate } from "../../utils/timesArrayUtils";
import { Card } from "../Card/Card";
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
    <Card>
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
    </Card>
  );
}

const styles = StyleSheet.create({
  timeHeader: {
    paddingTop: 12,
    backgroundColor,
    color: primaryTextColor,
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
    color: primaryTextColor,
  },
  endTimeSet: {
    width: "50%",
    textAlign: "center",
    fontSize: basicFontSize,
    color: primaryTextColor,
  },
});
