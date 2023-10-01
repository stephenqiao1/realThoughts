import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");

  const api = axios.create({
    baseURL: 'http://128.189.90.199:5000/api',
  });

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    try {
      const response = await api.post("/users/signup", {
        email,
        username,
        password,
      });

      // console.log("Test");

      console.log(response.data);

      if (response.data.success) {
        navigation.navigate("ShareThought");
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      console.log("API Error:", error.response ? error.response.data : error.message);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

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
          placeholder="Username"
          placeholderTextColor="#B0B0B0"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#B0B0B0"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => {
            console.log('Button pressed');
            handleSignUp();
            navigation.navigate("ShareThought");
          }}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
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
  getStartedButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  getStartedButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SignUpScreen;
