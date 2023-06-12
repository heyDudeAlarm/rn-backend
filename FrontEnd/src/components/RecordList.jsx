import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  Dimensions,
} from "react-native";
import SendBtn from "./Button/SendBtn";

const windowWidth = Dimensions.get("window").width;

const RecordList = (props) => (
  <View style={styles.container}>
    <Image src={props.profile_img} style={styles.photo} />
    <View style={styles.container_text}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.description}>{props.message}</Text>
    </View>
    <SendBtn onPress={props.onPress} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth - 46,
    marginHorizontal: 23,
    height: 100,
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
    fontSize: 20,
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
    width: 130,
    fontSize: 11,
    fontStyle: "italic",
    color: "#8D8D8D",
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default RecordList;
