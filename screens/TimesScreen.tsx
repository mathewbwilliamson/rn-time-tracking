import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import TimesContainer from "../components/Times/TimesContainer";
import { RootTabScreenProps } from "../types";

export default function TimesScreen({
  navigation,
}: RootTabScreenProps<"TimesScreen">) {
  return (
    <View style={styles.container}>
      <TimesContainer path="/screens/TimesScreen.tsx" />
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
