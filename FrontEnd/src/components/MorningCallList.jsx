import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import ToggleSwitch from "rn-toggle-switch";

const CustomRow = ({ title, description, image_url }) => {
  // switch toggle state
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.container_text}>
        <Text style={styles.title}>06:30</Text>
        <Text style={styles.label}>heydude 프로젝트 알림</Text>
      </View>
      {/* <ToggleSwitch
        text={{
          on: "",
          off: "",
          activeTextColor: "white",
          inactiveTextColor: "#B7B8BA",
        }}
        color={{
          indicator: "white",
          active: "#6d61ff",
          inactive: "#afafaf",
          activeBorder: "transparent",
          inactiveBorder: "transparent",
        }}
        active={true}
        disabled={false}
        width={50}
        radius={25}
        onValueChange={toggleSwitch}
      /> */}
      <Switch
        trackColor={{ false: "#AFAFAF", true: "#6d61ff" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 325,
    flex: 1,
    height: 85,
    flexDirection: "row",
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#FFF",
    elevation: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  label: { fontSize: 10, fontWeight: "bold", color: "#999999" },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center",
  },
  // description: {
  //   fontSize: 11,
  //   fontStyle: "italic",
  // },
  // photo: {
  //   height: 50,
  //   width: 50,
  // },
});

export default CustomRow;
