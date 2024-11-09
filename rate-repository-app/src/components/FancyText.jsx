import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  bigText: {
    fontSize: 24,
    fontWeight: "700",
  },
  boldText: {
    fontWeight: "bold",
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
