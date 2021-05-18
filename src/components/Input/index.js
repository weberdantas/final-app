import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

const Input = ({
  value,
  label,
  onChange,
  placeholder,
  isPassword,
  thisRef,
  onSubmitEditing,
  ...props
}) => {
  const [iconName, setIconName] = useState('eye-outline');
  const [check, setCheck] = useState(isPassword);

  const changeIconName = () => {
    if (iconName === "eye-outline") {
      setIconName("eye-off-outline");
      setCheck(false);
    }
    else {
      setIconName("eye-outline");
      setCheck(true);
    }
  }

  return (
    <View>
      {isPassword && (
        <TouchableOpacity style={styles.button} onPress={changeIconName}>
          <Icon name={iconName} color="#a1a2d5" size={24} />
        </TouchableOpacity>
      )}
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        keyboardType="default"
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={check}
        onSubmitEditing={onSubmitEditing}
        ref={thisRef}
        {...props}
      />
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  thisRef: PropTypes.any,
};

Input.defaultProps = {
  placeholder: "Placeholder",
  isPassword: false,
  thisRef: null,
  onSubmitEditing: () => {},
};

export default Input;
