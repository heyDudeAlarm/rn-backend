import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from "styled-components";
import GradientButton from "../components/Button/GradientButton"

import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width; // 스크린가로사이즈를 가져옴

const ListContainer = styled.View`
  flex: 0.8;
  gap: 20;
`
const ListView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${(props)=>props.gap};
`;

export default function AddAlarm({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [visible, setVisible] = useState(false); // 모달 노출 여부

  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/mypageBack.png")} /> */}
      <ListContainer>
        <ListView onPress={()=>{setVisible(!visible)}} gap={40}>
          <Text>시간</Text>
          <Text>오전 2시 47분</Text>
        </ListView>
        <ListView gap={26}>
          <Text>레이블</Text>
          <TextInput placeholder="알람 레이블을 입력하세요" maxLength={30} width={200}></TextInput>
        </ListView>
        <ListView gap={26}>
          <Text>사운드 설정</Text>
          <Text>하진</Text>
        </ListView>
        { visible ? <DateTimePicker onPress={(event)=>{console.log('h9hi')}} display="spinner" mode="time" value={new Date()} style={{flex: 1}}/> : null}
      </ListContainer>
      <GradientButton
          onPress={()=>{navigation.replace("TabNavigation")}} 
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
