import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "./theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    paddingLeft: 15,
    paddingBottom: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.flexContainer}>
        <AppBarTab text="Repositories" />
        <AppBarTab text="Sign In" link="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
