import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import GradientBorderButton from "../../components/Button/GradientBorderButton";

const SCREEN_WIDTH = Dimensions.get("window").width; // 스크린가로사이즈를 가져옴

export default function Signup({ navigation }) {
  // node data post요청
  const [data, setData] = useState('');
  // useEffect(() => {
  //   axios
  //     .get(`http://10.96.123.85:8080/auth/login`)
  //     .then((response) => {
  //       setData(response.data.message); // data state를 node.js 받아온 json으로 설정함.
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput style={styles.InputStyle} placeholder="email" name="email" />
        <TextInput
          style={styles.InputStyle}
          placeholder="nickname"
          name="nickname"
          keyboardType="twitter"
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="password"
          name="password"
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="password check"
          name="password_check"
        />
      </View>
      <GradientBorderButton
        onPress={() => navigation.goBack()}
        style={styles.visit}
        style2={styles.circleGradient}
        colors={["#8C92FF", "#92FBE7"]}
        text="Sign Up"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 40,
  },
  title: {
    color: "#8C92FF",
    fontSize: 30,
    fontWeight: "bold",
  },
  InputStyle: {
    backgroundColor: "#EDEFF2",
    borderRadius: 10,
    width: SCREEN_WIDTH - 50,
    height: 58,
    padding: 15,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
    fontSize: 16,
  },
});
