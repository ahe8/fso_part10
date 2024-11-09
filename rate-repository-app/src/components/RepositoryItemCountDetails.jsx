import { StyleSheet, View, Text } from "react-native";
import FancyText from "./FancyText";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  flexItem: {
    flexGrow: 0,
    display: "flex",
    alignItems: "center",
  },
  
});

const RepositoryItemCountDetails = ({ countDetails }) => {
  const { stargazersCount, forksCount, reviewCount, ratingAverage } =
    countDetails;

  const convertNumber = (number) => {
    if (isNaN(number) || number < 1000) {
      return number;
    } else if (number < 1000000) {
      return Math.round((number / 1000) * 10) / 10 + "" + "k";
    } else {
      return Math.round((number / 1000000) * 10) / 10 + "" + "m";
    }
  };

  return (
    <>
      <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
          <FancyText isBold>{convertNumber(stargazersCount)}</FancyText>
          <FancyText isGrey>Stars</FancyText>
        </View>
        <View style={styles.flexItem}>
          <FancyText isBold>{convertNumber(forksCount)}</FancyText>
          <FancyText isGrey>Forks</FancyText>
        </View>
        <View style={styles.flexItem}>
          <FancyText isBold>{convertNumber(reviewCount)}</FancyText>
          <FancyText isGrey>Reviews</FancyText>
        </View>
        <View style={styles.flexItem}>
          <FancyText isBold>{convertNumber(ratingAverage)}</FancyText>
          <FancyText isGrey>Rating</FancyText>
        </View>
      </View>
    </>
  );
};

export default RepositoryItemCountDetails;
