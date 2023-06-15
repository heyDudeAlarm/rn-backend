import React, { useState, useEffect } from 'react';
import { Button, Text, View, ToastAndroid } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import axios from "axios";

export default function Record({navigation}){
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const [uri, setUri] = useState(null);
  const [soundObj, setSoundObj] = useState(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

async function uploadAudio(){
  const formData = new FormData();
  // formData.append('file', convertFileToBlob(uri), 'file.mp3');
  formData.append('file', {
    uri: uri,
    type: 'audio/x-m4a', // m4a 오디오 파일의 MIME 타입
    // type: mime.getType(uri),
    name: 'file.m4a',
  });
  
  // JSON 데이터를 FormData에 추가
  // formData.append("userID", "sunjo");
  const userID = 2;
  formData.append("message", "여기 보내마.");

  axios({
    method: "post",
    // url: `http://10.0.2.2:8082/upload/audio/${userID}`,
    // url: `http://127.0.0.1:8082/upload/audio/${userID}`,
    url: `http://10.96.123.85:8082/upload/audio/${userID}`,
    mode: "cors",
    headers: {
      'Content-Type': 'multipart/form-data',
      // 'Accept': 'application/json'
    },
    data: formData,
  })
  .then(res => {
    ToastAndroid.show("오디오 파일 업로드 성공", ToastAndroid.SHORT)
    console.log("오디오 업로드 성공");
  }).catch(err => {
    ToastAndroid.show("실패하였습니다", ToastAndroid.SHORT)
    console.log(err);
  })
}

async function startRecording() {
  try {
    console.log('Requesting permissions..');
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    console.log('Starting recording..');
    const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    setRecording(recording);
    console.log('Recording started');
  } catch (err) {
    console.error('Failed to start recording', err);
  }
}

async function stopRecording() {
  console.log('Stopping recording..');
  setRecording(undefined);
  await recording.stopAndUnloadAsync();
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
  });
  setUri(recording.getURI());
  console.log(uri)
  const { sound, status } = await recording.createNewLoadedSoundAsync();
  setDuration(getDurationFormatted(status.durationMillis));
}

  const playRecording = async () => {
    try {
      console.log("starting audio...");
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      ); // 음성 재생할 수 있는 객체 생성
      await setSoundObj(sound);
      // console.log('Playing Sound', soundObj);
      await sound.playAsync();
    } catch (error) {
      console.error('음성 재생 실패:', error);
    }
  };

  function getDurationFormatted(millis) { //녹음시간 구하기
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  return (
    <View>
      {recording ? (
        <Button title="녹음 중지" onPress={stopRecording} />
      ) : (
        <Button title="녹음 시작" onPress={startRecording} />
      )}
      <Button title="오디오 upload" onPress={uploadAudio} />
      {uri && <Button title="녹음 재생" onPress={playRecording} />}
      {uri && <Text>녹음시간: {duration}</Text>}
    </View>
  );
};
