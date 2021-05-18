import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchInput = ({ value, onChange, onErase }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Pesquise aqui..."
        style={styles.input}
      />
      {value !== "" && (
        <TouchableOpacity style={styles.button} onPress={onErase}>
          <Icon name="close-circle-outline" color="#a1a2d5" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "#FFF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    paddingLeft: 12,
    fontFamily: "Ubuntu-Regular",
  },
  button: {
    position: "absolute",
    right: 18,
    top: 20,
    zIndex: 100,
  },
});

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onErase: PropTypes.func.isRequired,
};

export default SearchInput;
