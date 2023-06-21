import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import SendBtn from "../../components/Button/SendBtn";
// import CircularSlider from 'react-native-circular-slider';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from "react-native";

export default function AskRecord({ navigation }) {
  return (
    <View style={styles.background}>
        <View style={styles.container}>
            <Image style={styles.profile} />
            <Text style={styles.title}>선주님에게</Text>
            <TextInput style={styles.content} placeholder="30자 이내로 입력하세요" maxLength={30}/>
        </View>
        <View style={styles.bottom}>
            <SendBtn onPress={()=>{}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    background: {   
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
    },
    container: {
        flex: 0.9,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 18,
    },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  content: {
    flex: 0.3,
    fontSize: 15,
  },
  bottom: {
    flex: 0.1,
    alignItems: 'flex-end',
    marginRight: 20,
  }
});
