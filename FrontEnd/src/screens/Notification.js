import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';

const Notification = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handlePicker = (event, selectedDate) => {
    setShowPicker(false);

    if (selectedDate) {
      setSelectedTime(selectedDate);
    }
  };

  const scheduleNotification = async () => {
    if (selectedTime) {
      const content = {
        title: '알람',
        body: '알람이 울립니다!',
        sound: 'test.m4a',
      };

      const trigger = new Date(selectedTime);

      await Notifications.scheduleNotificationAsync({
        content,
        trigger,
      });
    }
  };

  return (
    <View>
      <Button title="알람 시간 선택" onPress={() => setShowPicker(true)} />
      {selectedTime && <Text>선택된 시간: {selectedTime.toString()}</Text>}
      <Button title="알람 설정" onPress={scheduleNotification} />

      {showPicker && (
        <DateTimePicker
          value={selectedTime || new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handlePicker}
        />
      )}
    </View>
  );
}

export default Notification;
