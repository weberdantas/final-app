import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const PageLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="primary" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageLoading;
