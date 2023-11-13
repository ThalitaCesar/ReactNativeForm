import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TitleHeader = ({ title }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    color: "#bababa",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#bababa",
    marginBottom: 20,
  },
});

export default TitleHeader;
