import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from "styled-components";
import GradientButton from "../components/Button/GradientButton"
import * as Notifications from 'expo-notifications';
import {Asset} from 'expo-asset';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width; // 스크린가로사이즈를 가져옴

const ListContainer = styled.View`
  flex: 0.8;
  gap: 20;
  marginLeft: 10;
`
const ListView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${(props)=>props.gap};
`;


export default function AddAlarm({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const [text, setText] = useState();

  const handlePicker = (event, selectedDate) => {
    setVisible(false);
    
    if (selectedDate) {
      setSelectedTime(selectedDate);
    }

    let t = new Date();
    t.setSeconds(t.getSeconds() + 5);
    console.log(t);
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const scheduleNotification = async () => {
  // const soundObject = new Asset.fromModule(require('../../assets/test.wav'));
  // await soundObject.downloadAsync(); // 소리 파일 다운로드

  // // 사용자 지정 소리 파일 설정
  // const sound = soundObject.localUri;
  const content = {
    title: '알람이 울려요!',
    body: text,
    sound: true,
    vibrate: true,
    color: "#6D61FF"
  };

  let after5Sec = new Date();
  after5Sec.setSeconds(after5Sec.getSeconds() + 5);
  const trigger = new Date(after5Sec); // 5초 뒤 알람이 울림.
  // const trigger = new Date(selectedTime);

  await Notifications.scheduleNotificationAsync({
    content,
    trigger,
  });
};
  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/mypageBack.png")} /> */}
      <ListContainer>
        <Text style={{color:'red', fontSize: 15}}>빠른 테스트를 위해 알람은 5초 뒤에 울리는 것만 가능합니다!!</Text>
        <ListView onPress={()=>{setVisible(true)}} gap={40}>
          <Text>시간</Text>
          <Text>오전 2시 47분</Text>
        </ListView>
        <ListView gap={26}>
          <Text>레이블</Text>
          <TextInput  
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            placeholder="알람 레이블을 입력하세요" maxLength={30} width={200}/>
        </ListView>
        <ListView gap={26}>
          <Text>사운드 설정</Text>
          <Text>하진</Text>
        </ListView>
        { visible ? 
          <DateTimePicker 
            onChange={handlePicker}
            onPress={(event)=>{console.log('h9hi')}} 
            display="spinner" mode="time" 
            value={new Date()} 
            style={{flex: 1}}/> 
            : null}
      </ListContainer>
      <GradientButton
          onPress={()=>{
            scheduleNotification();
            navigation.goBack();
          }} 
          colors={["#8C92FF", "#92FBE7"]}
          text="알람 생성"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
