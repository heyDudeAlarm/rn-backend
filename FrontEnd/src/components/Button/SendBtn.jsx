import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


const SendBtn = (props) => {
  const goAlert = () => {
    Alert.alert(
      "",
      "정말 홍길동님에게 보내시겠습니까?",
      [
        {
          text : "아니요",
          onPress: () => console.log("아니요"),
          style: "cancel"
        },
        {
          text : "모닝콜 녹음하기",
          onPress: props.press
        }
      ],
      {cancelable: false}
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>SEND</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 35,
    padding: 10,
    backgroundColor: "#6D61FF",
    borderRadius: 30,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
export default SendBtn;
