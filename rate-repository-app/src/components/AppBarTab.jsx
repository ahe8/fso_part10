import { StyleSheet, Text, Pressable } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  whiteText: {
    color: "white",
  },
  bigText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const textStyles = [styles.whiteText, styles.bigText];

const AppBarTab = (props) => {
  return (
    <Pressable>
      <Text style={textStyles}>{props.text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
