import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://10.96.123.85:3000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>{JSON.stringify(data)}</Text>
        <Text style={styles.title}>김하진 바보</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "pink",
    fontSize: 40,
  },
});
