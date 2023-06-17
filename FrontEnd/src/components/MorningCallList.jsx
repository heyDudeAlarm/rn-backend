import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ToggleSwitch from "rn-toggle-switch";

const windowWidth = Dimensions.get("window").width;
const CustomRow = ({ time, label, activate }) => {
  // switch toggle state
  const [isEnabled, setIsEnabled] = useState({ activate });
  const toggleSwitch = () => setIsEnabled((activate) => !activate);

  return (
    <View style={styles.container}>
      <View style={styles.container_text}>
        <Text style={styles.title}>{time}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <ToggleSwitch
        text={{
          on: "",
          off: "",
        }}
        color={{
          indicator: "white",
          active: "#6d61ff",
          inactive: "#afafaf",
          activeBorder: "transparent",
          inactiveBorder: "transparent",
        }}
        active={activate}
        disabled={false}
        width={17}
        radius={8}
        onValueChange={toggleSwitch}
      />

      {/* <Switch
        trackColor={{ false: "#AFAFAF", true: "#6d61ff" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth - 48,
    marginHorizontal: 10,
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
