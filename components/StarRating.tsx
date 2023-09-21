import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const StarRating = ({ score, containerStyle, starStyle }) => {
  // This is to generate a random float between 1 and 10 using the input score as a seed
  // Mainly for display purposes during testing
  if (score > 10) {
    const x = Math.sin(score) * 10000;
    const random = x - Math.floor(x);
    const floatInRange = 1 + random * 9;
    score = floatInRange;
  }
  const rating = (score / 10) * 5;

  const renderStar = (i, rating) => {
    let iconName = 'star';

    if (rating >= i + 1) {
      iconName = 'star';
    } else if (rating > i && rating < i + 1) {
      iconName = 'star-half';
    } else {
      iconName = 'star-o';
    }

    return (
      <FontAwesome
        key={i}
        name={iconName}
        size={24}
        color={iconName !== 'star-o' ? 'gold' : 'lightgray'}
        style={styles.star}
      />
    );
  };

  return (
    <View style={[styles.starContainer, containerStyle]}>
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
