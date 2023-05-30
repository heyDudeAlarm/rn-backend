import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import AudioRecorderPlayer, { 
  AVEncoderAudioQualityIOSType,
  AVEncodingOption, 
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType, 
 } from 'react-native-audio-recorder-player';

 onStartRecord = async () => {
    
  const path = 'hello.m4a';
  const audioSet = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    AVFormatIDKeyIOS: AVEncodingOption.aac,
  };
  console.log('audioSet', audioSet);
  const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
  this.audioRecorderPlayer.addRecordBackListener((e) => {
    this.setState({
      recordSecs: e.current_position,
      recordTime: this.audioRecorderPlayer.mmssss(
        Math.floor(e.current_position),
      ),
    });
  });
  console.log(`uri: ${uri}`);
};

export default function Record({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>녹음하는 화면입니다.</Text>
        <Button mode="contained" onPress={() => this.onStartRecord()} title="RECORD">
            RECORD
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 2.5,
    justifyContent: "flex-end",
    padding: 18,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  explain: {
    color: "#a6a6a6",
    marginTop: 30,
  },
  alarms: {
    flex: 9,
    justifyContent: "center",
    alignContent: "center",
  },
});
