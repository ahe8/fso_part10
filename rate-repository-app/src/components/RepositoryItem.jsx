import { StyleSheet, View, Text, Image } from "react-native";
import theme from "./theme";
import RepositoryItemCountDetails from "./RepositoryItemCountDetails";
import FancyText from "./FancyText";

const styles = StyleSheet.create({
  flexContainerRow: {
    display: "flex",
    flexDirection: "row",
  },
  
  flexContainerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    marginLeft: 15,
    marginBottom: 15,
    flexShrink: 1
  },

  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5
  },

  logo: {
    width: 66,
    height: 58,
    borderRadius: 5
  },

  language: {
    backgroundColor: theme.colors.primary,
    color: "white",
    alignSelf: "flex-start",
    margin: 3,
    padding: 5,
    borderRadius: 3
  },

  background: {
    backgroundColor: "white",
    padding: 15
  }
});


const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = item;

  const countDetails = {
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
  };

  return (
    <View style={styles.background}>
      <View style={styles.flexContainerRow}>
        <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />

        <View style={styles.flexContainerColumn}>
          <FancyText isBold>{fullName}</FancyText>
          <FancyText isGrey>{description}</FancyText>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>

      <RepositoryItemCountDetails countDetails={countDetails} />
    </View>
  );
};

export default RepositoryItem;
