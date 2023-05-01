import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MorningCallListView from "../components/MorningCallListView";
const getData = () => {
  return [
    {
      key: 1,
      title: "Albert Einstein",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image_url:
        "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800",
    },
    {
      key: 2,
      title: "Isaac newton",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image_url:
        "http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png",
    },
    {
      key: 1,
      title: "Albert Einstein",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image_url:
        "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800",
    },
    {
      key: 2,
      title: "Isaac newton",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image_url:
        "http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png",
    },
    {
      key: 1,
      title: "Albert Einstein",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image_url:
        "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800",
    },
    {
      key: 2,
      title: "Isaac newton",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image_url:
        "http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png",
    },
    {
      key: 1,
      title: "Albert Einstein",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image_url:
        "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800",
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
        <ScrollView
          showsHorizontalScrollIndicator={false} // 밑에 스크롤 숨기기
          contentContainerStyle={styles.weather}
        >
          <MorningCallListView itemList={getData()} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
    // marginRight: 25,
  },
  header: {
    flex: 1.5,
    justifyContent: "flex-end",
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  alarms: {
    justifyContent: "center",
    alignContent: "center",
  },
});
