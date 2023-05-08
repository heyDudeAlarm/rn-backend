import { Button, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBorderButton = ({ onPress, colors, text, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={colors}
        style={styles.borderButton}
      >
        <View style={styles.circleGradient}>
          <Text style={styles.visit}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientBorderButton;
