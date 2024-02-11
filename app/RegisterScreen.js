import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      await api.post("/register", { username, password });
      alert("User registered successfully");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
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

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    fontWeight: "bold", // Darker text color
  },
  input: {
    height: 40,
    borderColor: "#ddd", // Light border color
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#fff", // White background color
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  registerButton: {
    backgroundColor: "#4CAF50", // Green color
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
    backgroundColor: "#3498db", // Blue color
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
    color: "#fff", // White text color
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

export default RegisterScreen;
