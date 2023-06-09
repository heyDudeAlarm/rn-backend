import { StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const GradientButton = ({ onPress, colors, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        style={styles.container}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <Text style={styles.text}>{text}</Text>
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
  text: {
    textAlign: "center",
    color: "#ffffff",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
    fontSize: 16,
  }
});
export default GradientButton;
