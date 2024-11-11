import { StyleSheet, Text } from "react-native";
import theme from './theme';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main
  },
  bigText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
  boldText: {
    fontWeight: theme.fontWeights.bold,
  },
  greyText: {
    color: "grey",
  },
});

const FancyText = ({ isGrey, isBold, isBig, children }) => {
  const textStyles = [
    styles.text,
    isBig && styles.bigText,
    isGrey && styles.greyText,
    isBold && styles.boldText,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

export default FancyText;
