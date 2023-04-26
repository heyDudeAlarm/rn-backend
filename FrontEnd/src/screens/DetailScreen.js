// DetailScreen.js

import React from "react";
import { Button, View } from "react-native";

function DetailScreen({ navigation }) {
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailScreen;
