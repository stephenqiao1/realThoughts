import { useState, useContext } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import UserContext from "../context/userContext";
import Constants from "expo-constants";

const ShareThoughtScreen = ({ navigation }) => {
  const api = axios.create({
    baseURL: `http://${Constants.expoConfig.extra.IP_ADDRESS}:5000/api`,
  });

  const { user, setUser } = useContext(UserContext);

  const [thought, setThought] = useState("");
  const [promptVisible, setPromptVisible] = useState(false);

  const dailyPrompt = "Write about a memorable moment in your life.";

  const handleShareThought = async () => {
    console.log(user.userId);
    try {
      const response = await api.post('/thoughts/create', {
        userId: user.userId,
        content: thought,
      });

      if (response.data.success) {
        Alert.alert("Success", "Thought shared successfully!");
      } else {
        Alert.alert("Error", "Failed to share thought.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => {
          handleShareThought();
          navigation.navigate("Feed");
          }}>
          <Ionicons name="arrow-forward" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Share a thought to see others</Text>
        <TouchableOpacity onPress={() => setPromptVisible(!promptVisible)}>
          <Text style={styles.promptText}>
            Don't know what to share? Click to see the hidden daily prompt!
          </Text>
        </TouchableOpacity>
        {promptVisible && <Text style={styles.dailyPrompt}>{dailyPrompt}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Share your thoughts..."
          placeholderTextColor="#B0B0B0"
          value={thought}
          onChangeText={setThought}
          multiline
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
  },
  iconContainer: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  promptText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  dailyPrompt: {
    fontSize: 16,
    color: "#B0B0B0",
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  input: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0,
    textAlignVertical: "top",
  },
});

export default ShareThoughtScreen;
