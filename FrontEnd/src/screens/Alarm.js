import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import MorningCallListView from "../components/MorningCallListView";

const getData = () => {
  return [
    {
      key: 1,
      time: "06:30",
      label: "졸업식 날",
      activate: true,
    },
    {
      key: 2,
      time: "06:30",
      label: "졸업식 날",
      activate: true,
    },
    {
      key: 3,
      time: "06:30",
      label: "진이 생일날!",
      activate: true,
    },
  ];
};
export default function MorningCall({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>알람 목록</Text>
      </View>
      <View style={styles.alarms}>
        {/* <ScrollView
          showsHorizontalScrollIndicator={false} // 밑에 스크롤 숨기기
          contentContainerStyle={styles.weather}
        > */}
        <MorningCallListView itemList={getData()} />
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 18,
    backgroundColor: "#fff",
    // marginRight: 25,
  },
  header: {
    flex: 1.5,
    justifyContent: "flex-end",
    padding: 12,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  alarms: {
    flex: 9,
    justifyContent: "center",
    alignContent: "center",
  },
});
