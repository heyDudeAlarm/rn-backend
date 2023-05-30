import React from "react";
import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to detail screen"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

export default HomeScreen;
