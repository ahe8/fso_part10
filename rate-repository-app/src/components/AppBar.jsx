import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "./theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    padding: 20,
    justifyContent: "center"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
