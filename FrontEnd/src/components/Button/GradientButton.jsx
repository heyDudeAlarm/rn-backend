import { Button, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ onPress, colors, text, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colors}
        style={styles.fillButton}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <Text style={textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
