import * as React from "react";
import { StyleSheet } from "react-native";
import { AddNewTimeRecordButton } from "../components/AddNewTimeRecordButton/AddNewTimeRecordButton";
import { View } from "../components/Themed";

export default function AggregateScreen() {
  return (
    <View style={styles.container}>
      <AddNewTimeRecordButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
