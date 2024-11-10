import { StyleSheet, Text, Pressable } from "react-native";
import theme from "./theme";
import { Link } from "react-router-native";

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
      <Link to={props.link || "/"}>
        <Text style={textStyles}>{props.text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
