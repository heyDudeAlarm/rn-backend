import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function Message({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>같이보낼 짧은 메세지를 입력하세요</Text>
        <TextInput placeholder="공백포함 30자 이내로 입력하세요"/>
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
