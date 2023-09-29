import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NameScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("ShareThought")}
        >
          <Ionicons name="arrow-forward" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>YourThoughts</Text>
        <Text style={styles.subtitle}>
          Let's get started, what's your preferred name?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#B0B0B0"
          value={name}
          onChangeText={setName}
          autoFocus
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 42,
    paddingVertical: 10,
    borderBottomWidth: 0,
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
  },
});

export default NameScreen;
