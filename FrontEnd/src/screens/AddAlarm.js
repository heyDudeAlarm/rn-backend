import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
// import CircularSlider from 'react-native-circular-slider';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function AddAlarm({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        {/* <CircularSlider
          startAngle={this.state.startAngle}
          angleLength={this.state.angleLength}
          onUpdate={({ startAngle, angleLength }) => this.setState({ startAngle, angleLength })}
          segments={5}
          strokeWidth={100}
          radius={145}
          gradientColorFrom="#ff9800"
          gradientColorTo="#ffcf00"
          showClockFace
          clockFaceColor="#9d9d9d"
          bgCircleColor="#171717"
        /> */}
        <Text>알람 추가 하는 페이지 입니다.</Text>
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
    padding: 18,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
