import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import RecordList from "../../components/RecordListView";
import CustomRow from "../../components/RecordList"

export default function RecordListScreen(props) {
  const getData = () => {
    // 서버에서 json형태로 받아옴
    return [
      {
        key: 1,
        name: "홍길동",
        message: "나 이번에는 진짜 일어나서 프로젝트 한다11!!!!! 화이팅",
        profile_img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
      {
        key: 2,
        name: "홍길동",
        message: "오늘은 진짜 expo키고 초심지킨다",
        profile_img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
      {
        key: 3,
        name: "하진",
        message: "오늘은 진짜 프로젝트 시작한다",
        profile_img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
      {
        key: 4,
        name: "홍길동",
        message: "오늘은 진짜 프로젝트 시작한다",
        profile_img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
    ];
  };

  const renderItem = ({ item }) => (
      <CustomRow
          name={item.name}
          message={item.message}
          profile_img={item.profile_img}
          onPress={props.toRecord}
      />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>모닝콜 요청</Text>
        <Text style={{ color: "#6D61FF" }}>{getData().length} Calls</Text>
        <Text style={styles.explain}>
          모닝콜을 보내고 싶은 친구를 선택해주세요
        </Text>
      </View>
      <View style={styles.alarms}>
        <RecordList
          itemList={getData()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    flex: 1.5,
    justifyContent: "flex-end",
    paddingLeft: 18,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
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
