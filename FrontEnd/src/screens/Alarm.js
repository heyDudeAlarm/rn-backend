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


export default function MorningCall({ navigation }) {
  const [data, setData] = useState([
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
      time: "06:17",
      label: "진이 생일날!",
      activate: true,
    }]);

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
        <MorningCallListView itemList={data} />
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
    justifyContent: "center",
    paddingTop: 20,
    paddingLeft: 12,
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
