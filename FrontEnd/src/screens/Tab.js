import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import Alarm from "../screens/Alarm";
import Record from "./Record/RecordListScreen";
import Profile from "../screens/Profile";
import Friends from "../screens/Friends";

const Tab = createBottomTabNavigator();
const Stack = createNavigationContainerRef();

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const IconOcations = ({ name, size, color }) => {
  return <Octicons name={name} size={size} color={color} />;
};

const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Alarm"
      tabBarOptions={{ showLabel: false, activeTintColor: "#000" }}
    >
      <Tab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "alarm" }),
          headerShown: false, //header숨기기
        }}
      />
      <Tab.Screen
        name="Record"
        component={Record}
        options={{
          tabBarIcon: (props) =>
            TabIcon({ ...props, name: "microphone-outline" }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddAlarm"
        component={Record}
        options={{
          tabBarIcon: () => {
            return (
              // navigator로 이동
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Record");
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/icons/add-alarm.png")}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: (props) => IconOcations({ ...props, name: "person-add" }),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{
          tabBarIcon: (props) => IconOcations({ ...props, name: "home" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
