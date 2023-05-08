import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from "./TabScreens";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import Alarm from "../screens/Alarm";
import MorningCall from "../screens/MorningCall";
import Mypage from "../screens/Mypage";

const Tab = createBottomTabNavigator();
const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const IconOcations = ({ name, size, color }) => {
  return <Octicons name={name} size={size} color={color} />;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      tabBarOptions={{ showLabel: false, activeTintColor: "#000" }}
    >
      <Tab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "alarm" }),
        }}
      />
      <Tab.Screen
        name="Record"
        component={MorningCall}
        options={{
          tabBarIcon: (props) =>
            TabIcon({ ...props, name: "microphone-outline" }),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Settings}
        options={{
          tabBarIcon: (props) => IconOcations({ ...props, name: "person-add" }),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Mypage}
        options={{
          tabBarIcon: (props) => IconOcations({ ...props, name: "home" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
