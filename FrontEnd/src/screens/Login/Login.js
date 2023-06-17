import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-toast-message"
import axios from "axios";
import GradientButton from "../../components/Button/GradientButton";
import GradientBorderButton from "../../components/Button/GradientBorderButton";

export default function Login({ navigation }) {
  // node data가져오기
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
const LoginEvent = () => {
    const formdata = {
      email : email.trim(),
      password : password
    }
    if(!email || !password){
      ToastAndroid.show("데이터를 입력하세요", ToastAndroid.SHORT)
    }else{
      axios
      .post(`http://10.0.2.2:8082/auth/login`, JSON.stringify(formdata), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((res) => {
        // console.log(res);
        if(res.data["fail"]){ //로그인 실패
          ToastAndroid.show("로그인에 실패하였습니다.", ToastAndroid.SHORT)
        }else{ //로그인 성공
          ToastAndroid.show("로그인 성공!", ToastAndroid.SHORT)
          AsyncStorage.setItem('session', JSON.stringify({
            email : res.data.email,
            nickname : res.data.nickname,
          })); // session에 저장
          navigation.replace("TabNavigation", {"userdata" : res["data"]}); //tabnavigation으로 이동
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

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
          onChangeText={(text)=> setEmail(text)}
          keyboardType="email-address"
          />
        <TextInput
          style={styles.InputStyle}
          placeholder="password"
          onChangeText={(text)=> setPassword(text)}
          secureTextEntry
        />
        {/* </form> */}
      </View>
      <View style={styles.buttons}>
        <GradientButton
          onPress={LoginEvent} 
          colors={["#8C92FF", "#92FBE7"]}
          text="Login"
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
});
