import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SettingsItem = ({
  iconName,
  iconColor,
  title,
  onPress,
  textRight,
  isSwitch,
}) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={isSwitch}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} color={iconColor} size={26} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {isSwitch ? (
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0bb" }}
            thumbColor={enabled ? "#81b0ff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setEnabled}
            value={enabled}
          />
        </View>
      ) : (
        <>
          <View style={styles.textRightContainer}>
            <Text style={styles.text}>{textRight}</Text>
          </View>
          <View style={styles.chevronContainer}>
            <Icon name="chevron-forward-outline" color="#AAA" size={22} />
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
  },
  iconContainer: {
    width: "13%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: "60%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  switchContainer: {
    width: "27%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textRightContainer: {
    position: "absolute",
    top: 16,
    right: 30,
  },
  chevronContainer: {
    position: "absolute",
    top: 14,
    right: 8,
  },
  text: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 14,
  },
});

SettingsItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  textRight: PropTypes.string,
  isSwitch: PropTypes.bool,
};

SettingsItem.defaultProps = {
  iconColor: "#000",
  textRight: "",
  isSwitch: false,
};

export default SettingsItem;
