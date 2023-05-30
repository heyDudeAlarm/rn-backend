import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";
import GradientButton from "../../components/Button/GradientButton";
import GradientBorderButton from "../../components/Button/GradientBorderButton";

export default function Login({ navigation }) {
  // node data가져오기
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
        <Text
          style={{
            color: "#8C92FF",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Hey Dude!
        </Text>
        {/* 데이터 가져오기 */}
        {/* <Text>{JSON.stringify(data)}</Text> */}
      </View>
      <View style={styles.inputs}>
        {/* <form method="POST"> */}
        <TextInput
          style={styles.InputStyle}
          placeholder="email"
          name="email"
          keyboardType="twitter"
        />
        <TextInput
          style={styles.InputStyle}
          placeholder="password"
          name="password"
          secureTextEntry
        />
        {/* </form> */}
      </View>
      <View style={styles.buttons}>
        <GradientButton
          onPress={() => navigation.navigate("TabNavigation")} //tabnavigation으로 이동
          style={styles.fillButton}
          colors={["#8C92FF", "#92FBE7"]}
          text="Login"
          textStyle={styles.buttonText}
        />
        <GradientBorderButton
          onPress={() => navigation.navigate("Signup")}
          style={styles.visit}
          style2={styles.circleGradient}
          colors={["#8C92FF", "#92FBE7"]}
          text="Sign Up"
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
    alignItems: "center",
    justifyContent: "center",
    rowGap: 40,
  },
  title: {
    flex: 0.13,
    color: "pink",
    fontSize: 40,
  },
  inputs: {
    flex: 0.25,
  },
  buttons: {
    flex: 0.2,
  },
  InputStyle: {
    backgroundColor: "#EDEFF2",
    borderRadius: 10,
    width: 300,
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
