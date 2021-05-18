import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Alert, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { Input, Button } from "../../components";

import logoImg from "../../assets/images/logo.png";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    storeData();
  }, []);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@nickname", "weberdantas");
      await AsyncStorage.setItem("@password", "123456");
    } catch (error) {
      console.log("error->", error);
    }
  };

  const onLogin = async () => {
    try {
      const nick = await AsyncStorage.getItem("@nickname");
      const pass = await AsyncStorage.getItem("@password");

      if (nick === nickname && pass === password) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Login", "Credenciais inválidas");
      }
    } catch (error) {
      console.log("error->", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" /> 
      <View style={styles.topContainer}>
        <Image source={logoImg} resizeMode="contain" style={{ height: 200 }} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputContent}>
          <View style={{ marginBottom: 10 }}>
            <Input
              value={nickname}
              label="Nickname"
              onChange={value => setNickname(value)}
              placeholder="Nickname"
              thisRef={inputRef1}
              onSubmitEditing={() => inputRef2.current.focus()}
            />
          </View>
          <View style={{ marginBottom: 14 }}>
            <Input
              value={password}
              label="Password"
              onChange={value => setPassword(value)}
              placeholder="Password"
              isPassword={true}
              thisRef={inputRef2}
              onSubmitEditing={onLogin}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Button title="Entrar" onPress={onLogin} />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={{ fontFamily: "Ubuntu-Regular" }}>
          Não tem conta? Cadastre-se
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputContent: {
    width: "80%",
  },
  buttonContent: {
    width: "60%",
  },
  footerContainer: {
    position: "absolute",
    bottom: 8,
  },
  forgotPasswordContainer: {
    width: "100%",
    marginTop: 14,
  },
  forgotPasswordText: {
    color: "#a1a2d5",
    fontFamily: "Ubuntu-Bold",
    fontSize: 16,
  },
});

export default Login;
