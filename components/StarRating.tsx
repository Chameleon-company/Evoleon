import React from "react";
import PropTypes from 'prop-types';
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

// Renders a star icon for the StarRating component
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
      color={iconName !== "star-o" ? "gold" : "lightgray"}
      style={styles.star}
    />
  );
};

const MAX_STARS = 5;

const StarRating = ({ score }) => {
  // This is to generate a random float between 1 and 10 using the input score as a seed
  // Mainly for display purposes during testing
  if (score > 10) {
    const x = Math.sin(score) * 10000;
    const random = x - Math.floor(x);
    score = 1 + random * 9;  // Float in range
  }

  const rating = (score / 10) * MAX_STARS;

  return (
    <View style={styles.starContainer}>
      {Array(MAX_STARS).fill(null).map((_, i) => renderStar(i, rating))}
    </View>
  );
};

StarRating.propTypes = {
  score: PropTypes.number.isRequired,
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
