import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import SendBtn from "./Button/SendBtn";

const windowWidth = Dimensions.get("window").width;

const FriendsList = (props) => (
  <View style={styles.container}>
    <Image src={props.profile_img} style={styles.photo} />
    <View style={styles.container_text}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.description}>{props.message}</Text>
    </View>
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.typeBtn}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            overflow: 'hidden',
            borderColor: 'blue',
          }}
          source={require('../../assets/icons/friendList/alarmReqBtn.png')}
        />
</TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth - 46,
    marginHorizontal: 23,
    height: 70,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    elevation: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  label: { fontSize: 10, fontWeight: "bold", color: "#999999" },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
    justifyContent: "center",
  },
  description: {
    width: 150,
    fontSize: 10,
    fontStyle: "italic",
    color: "#8D8D8D",
  },
  photo: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
});

export default FriendsList;
