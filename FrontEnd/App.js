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
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("http://10.96.123.85:3000/api/data")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  const GradientButton = ({ onPress, style, colors, text }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={colors} style={style}>
          <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
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
        <TextInput style={styles.InputStyle} placeholder="id" />
        <TextInput style={styles.InputStyle} placeholder="password" />
      </View>
      <View>
        <GradientButton
          onPress={() => alert("Button Pressed")}
          style={styles.fillButton}
          colors={["#8C92FF", "#92FBE7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.5 }}
          text="Login"
        />
        <GradientButton
          onPress={() => alert("Button Pressed")}
          style={styles.borderButton}
          colors={["#8C92FF", "#92FBE7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.5 }}
          text="Login"
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
  },
});
