import React from "react";
import { View } from "react-native";
import { FlatList, StyleSheet } from "react-native";
import { backgroundColor } from "../../styles/styleVariables";

interface CardProps {
  children: any;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: backgroundColor,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
    margin: 16,
  },
});
