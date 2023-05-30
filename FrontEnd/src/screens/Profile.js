import React from "react";
import { Button, View, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function MyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('../../assets/mypageBack.png')} resizeMode="cover" style={styles.bgImage}>
        <Ionicons style={styles.settings} name="settings-outline" size={24} color="white" />
        <View style={styles.contents}>
          <Image style={styles.profile} />
          <Text style={styles.username}>김하진</Text>
          <Text style={styles.email}>w2128@e-mirim.hs.kr</Text>
          <Text style={styles.stateMess}>마이페이지 입니다~~~</Text>
        </View>
      </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  bgImage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight-380,
    alignItems: "center",
    justifyContent: "center",
  },
  settings: {
    alignSelf: "flex-end",
    marginRight: 15,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  contents: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: '#4f4f4f',
    fontSize: 10,
  },
  stateMess: {
    marginTop: 15,
    fontSize: 15,
  }
})

export default MyPage;
