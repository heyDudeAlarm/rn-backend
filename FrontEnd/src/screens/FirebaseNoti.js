import React from "react";
import { Text, View, Button } from "react-native";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";
import { initializeApp } from "firebase/app";
import { registerForPushNotificationsAsync } from 'expo-notifications';
import Constants from 'expo-constants';

// const firebaseConfig = {
//     apiKey: "AIzaSyA697BjAp5s82KM-7tGQUk-zxgeNJp-YVc",
//     authDomain: "reactnativeheydude.firebaseapp.com",
//     projectId: "reactnativeheydude",
//     storageBucket: "reactnativeheydude.appspot.com",
//     messagingSenderId: "783196079785",
//     appId: "1:783196079785:web:9111671d0879629e518bb8",
//     measurementId: "G-BX3ELF7PDP"
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging();

// //토큰값 얻기
// const getTokenValue = () => {
//   getToken(messaging, {
//     vapidKey:"BBBjxcsG4RGxNlD_HhEkj6HISi5z4PhiBuDnfkq6E3RRcNvOtUgGkQPw9x1awOl_fhryTRvtINRkHjs_b01Z0dE",
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log(currentToken);
//       } else {
//         // Show permission request UI
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//         // ...
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//       // ...
//     });
  
//   //포그라운드 메시지 수신
//   onMessage(messaging, (payload) => {
//     console.log("Message received. ", payload);
//     // ...
//   });
// }


export default function FirebaseNoti(){
    return(
        <View>
            <Button title="눌러봐" onPress={getToken}/>
        </View>
    )
}
