import { StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ onPress, colors, text, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        style={styles.container}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <Text style={textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 58,
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GradientButton;
