import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  input: {
    width: width - 100,
    backgroundColor: "#f6f7f9",
    borderWidth: 1,
    borderColor: "#a1a2d5",
    borderRadius: 10,
    paddingLeft: 18,
    color: "#a1a2d5",
    fontFamily: "Ubuntu-Regular",
    fontSize: 16
  },
  label: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 14,
    marginBottom: 4
  },
  button: {
    position: 'absolute',
    right: 12,
    top: 32,
    zIndex: 100
  }
});

export default styles;
