import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import axios from "axios";

export default function Login() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get(`http://10.96.123.85:3000/api/data`)
  //     .then((response) => {
  //       setData(response.data); // data state를 node.js 받아온 json으로 설정함.
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const GradientButton = ({ onPress, colors, text, textStyle }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={colors}
          style={styles.fillButton}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
        >
          <Text style={textStyle}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const GradientBorderButton = ({ onPress, colors, text, textStyle }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={[0, 0.5]}
          end={[1, 0.5]}
          colors={colors}
          style={styles.borderButton}
        >
          <View style={styles.circleGradient}>
            <Text style={styles.visit}>{text}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

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
        {/* <Text>{JSON.stringify(data["message"])}</Text> */}
      </View>
      <View>
        {/* <form method="POST"> */}
        <TextInput style={styles.InputStyle} placeholder="email" name="email" />
        <TextInput
          style={styles.InputStyle}
          placeholder="password"
          name="password"
        />
        {/* </form> */}
      </View>
      <View>
        <GradientButton
          onPress={() => alert("로그인 되었습니다.")}
          style={styles.fillButton}
          colors={["#8C92FF", "#92FBE7"]}
          text="Login"
          textStyle={styles.buttonText}
        />
        <GradientBorderButton
          onPress={() => alert("Button Pressed")}
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
    color: "pink",
    fontSize: 40,
  },
  InputStyle: {
    backgroundColor: "#EDEFF2",
    borderRadius: 10,
    width: 300,
    height: 58,
    padding: 15,
    margin: 10,
  },
  fillButton: {
    width: 300,
    height: 58,
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  borderButton: {
    width: 300,
    height: 58,
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    margin: 1,
    backgroundColor: "white",
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
  circleGradient: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  visit: {
    margin: 14.5,
    paddingHorizontal: 104,
    textAlign: "center",
    backgroundColor: "white",
    color: "#4C64FF",
    fontSize: 16,
  },
});
