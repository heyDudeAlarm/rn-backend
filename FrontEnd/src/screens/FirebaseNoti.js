import React from "react";
import { Text, View  } from "react-native";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { registerForPushNotificationsAsync } from 'expo-notifications';
import Constants from 'expo-constants';
import {app} from "../../firebaseConfig";

const firebaseConfig = {
    apiKey: "AIzaSyA697BjAp5s82KM-7tGQUk-zxgeNJp-YVc",
    authDomain: "reactnativeheydude.firebaseapp.com",
    projectId: "reactnativeheydude",
    storageBucket: "reactnativeheydude.appspot.com",
    messagingSenderId: "783196079785",
    appId: "1:783196079785:web:9111671d0879629e518bb8",
    measurementId: "G-BX3ELF7PDP"
};

// const app = initializeApp(config);
// const messaging = getMessaging();

// //토큰값 얻기
// getToken(messaging, {
//   vapidKey:
//     "프로젝트설정 > 클라우드메시징 > 웹 구성의 웹푸시인증서 발급",
// })
//   .then((currentToken) => {
//     if (currentToken) {
//       // Send the token to your server and update the UI if necessary
//       // ...
//       console.log(currentToken);
//     } else {
//       // Show permission request UI
//       console.log(
//         "No registration token available. Request permission to generate one."
//       );
//       // ...
//     }
//   })
//   .catch((err) => {
//     console.log("An error occurred while retrieving token. ", err);
//     // ...
//   });

// //포그라운드 메시지 수신
// onMessage(messaging, (payload) => {
//   console.log("Message received. ", payload);
//   // ...
// });

export default function FirebaseNoti(){
    return(
        <View>
            <Text>눌러봐</Text>
        </View>
    )
}
