import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import RecorderComponent from "../../components/RecorderComponent"

export default function Record({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>녹음하는 화면입니다.</Text>
        <RecorderComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 2.5,
    justifyContent: "flex-end",
    padding: 18,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  explain: {
    color: "#a6a6a6",
    marginTop: 30,
  },
  alarms: {
    flex: 9,
    justifyContent: "center",
    alignContent: "center",
  },
});
