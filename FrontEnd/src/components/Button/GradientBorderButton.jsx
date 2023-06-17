import { StyleSheet, Button, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBorderButton = ({ onPress, colors, text, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={colors}
        style={styles.container}
      >
        <View style={styles.circleGradient}>
          <Text style={styles.visit}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 305,
    height: 60,
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    margin: 1,
    backgroundColor: "white",
  },
  circleGradient: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  visit: {
    margin: 14.5,
    paddingHorizontal: 104,
    textAlign: "center",
    backgroundColor: "white",
    color: "#4C64FF",
    fontSize: 16,
  },
});
export default GradientBorderButton;
