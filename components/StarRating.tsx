import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const StarRating = ({ score }) => {
  if (score > 10) {
    const x = Math.sin(score) * 10000;
    const random = x - Math.floor(x);
    const floatInRange = 1 + random * 9; // This generates a float between 1 and 10
    score = floatInRange;
  }
  const rating = (score / 10) * 5;

  const renderStar = (i, rating) => {
    let iconName = "star";

    if (rating >= i + 1) {
      iconName = "star";
    } else if (rating > i && rating < i + 1) {
      iconName = "star-half";
    } else {
      iconName = "star-o";
    }

    return (
      <FontAwesome
        key={i}
        name={iconName}
        size={24}
        color={iconName !== "star-outlined" ? "black" : "lightgray"}
        style={styles.star}
      />
    );
  };

  return (
    <View style={styles.starContainer}>
      {Array.from(Array(5).keys()).map((i) => renderStar(i, rating))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  star: {
    marginRight: 4,
  },
});

export default StarRating;
