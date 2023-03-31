import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
