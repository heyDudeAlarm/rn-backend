import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { Audio } from 'expo-av';

export default function Record(){
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const [uri, setUri] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
    const getUri = recording.getURI();
    setUri(getUri);
    console.log(uri)
  }

  const playRecording = async () => {
    // if (!recording) {
    //   return;
    // }

    try {
      // const { sound } = await Audio.Sound.createAsync( require('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540fastcat2%252Fheydude/Audio/recording-50af7838-3238-4938-8014-e15393454a93.m4a'));
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      );
      console.log('Playing Sound', sound);
      await sound.playAsync();
    } catch (error) {
      console.error('음성 재생 실패:', error);
    }
  };

  return (
    <View>
      {recording ? (
        <Button title="녹음 중지" onPress={stopRecording} />
      ) : (
        <Button title="녹음 시작" onPress={startRecording} />
      )}
      <Button title="녹음 재생" onPress={playRecording} />
      {sound && <Button title="녹음 재생" onPress={playRecording} />}
    </View>
  );
};
