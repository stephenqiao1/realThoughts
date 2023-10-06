import { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import UserContext from "../context/userContext";
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  const api = axios.create({
    baseURL: `http://${Constants.expoConfig.extra.IP_ADDRESS}:5000/api`,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post('/users/login', {
        email,
        password,
      });

      if (response.data.success) {
        console.log(response.data);
        setUser({ userId: response.data.userId});
        navigation.navigate('Feed');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>YourThoughts</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgotten password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>
        {/* <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={24} color="#000" />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity> */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  appTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginVertical: 100,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  forgotPassword: {
    color: "#B0B0B0",
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#B0B0B0",
  },
  dividerText: {
    color: "#B0B0B0",
    paddingHorizontal: 10,
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonText: {
    marginLeft: 10,
    color: "#000",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  signupText: {
    color: "#B0B0B0",
  },
  signupLink: {
    color: "#007BFF",
  },
});

export default LoginScreen;
