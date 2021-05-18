import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width - 140,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    backgroundColor: "#a1a2d5",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "Ubuntu-Bold",
  },
});

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  title: "Título",
};

export default Button;
