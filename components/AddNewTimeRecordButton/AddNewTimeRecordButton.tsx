import React from "react";
import { Button, View } from "react-native";
import { StyleSheet } from "react-native";

interface AddNewTimeRecordButtonProps {}

export const AddNewTimeRecordButton: React.FC<AddNewTimeRecordButtonProps> =
  () => {
    return (
      <View style={styles.container}>
        <Button
          title={"Add New Time Record"}
          onPress={() => {
            console.log("\x1b[42m%s \x1b[0m", "FIXME: [matt] hit");
          }}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
  },
});
