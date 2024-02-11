import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", { username, password });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      alert("Login successful");
      navigation.navigate("BottomNav");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/job5.png")}
        style={styles.image}
      />
      <Text style={styles.heading}>Welcome to JobSearch</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.buttonText}>Go to Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderWidth: 20, // Border width
    borderTopWidth: 40,
    borderColor: "#ff7096", // Light border color
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    marginTop: 10,
    marginBottom: 20,
    color: "dodgerblue",
    fontWeight: "bold",
    fontSize: 35,
  },
});

export default LoginScreen;
