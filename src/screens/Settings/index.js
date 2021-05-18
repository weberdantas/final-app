import React from "react";
import { View, Text, StyleSheet, Image, Tou } from "react-native";

import { SettingsItem, Button } from "../../components";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://revistatudo.com.br/site/wp-content/uploads/2020/08/Cr%C3%A9dito-da-foto-Gustavo-Arrais_Marina_Person_02-12-2015_3887.jpg",
          }}
        />
        <Text style={styles.textName}>Carla Silva</Text>
        <Text style={styles.textEmail}>carla.silva@capgemini.com</Text>
        <View style={styles.buttonContainer}>
          <Button title="Editar Perfil" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionText}>Opções</Text>
      </View>
      <SettingsItem
        iconName="heart-outline"
        title="Favoritos"
        iconColor="red"
        onPress={() => {}}
      />
      <SettingsItem
        iconName="cloud-download-outline"
        title="Downloads"
        onPress={() => {}}
      />
      <SettingsItem
        iconName="language-outline"
        iconColor="blue"
        title="Linguagens"
        textRight="Português"
        onPress={() => {}}
      />
      <SettingsItem
        iconName="moon-outline"
        iconColor="yellow"
        title="Dark Mode"
        isSwitch={true}
        onPress={() => {}}
      />
      <SettingsItem
        iconName="wifi-outline"
        title="Download apenas no WiFi"
        isSwitch={true}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  topContainer: {
    alignItems: "center",
    height: 300,
    backgroundColor: "#FFF",
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#aaa",
  },
  textName: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    marginBottom: 12
  },
  textEmail: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 14,
    color: "#bbb"
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 18
  },
  sectionHeader: {
    width: "100%",
    justifyContent: "center",
    height: 45,
    paddingLeft: 20
  },
  sectionText: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 16,
    color: "#bbb"
  }
});

export default Settings;
