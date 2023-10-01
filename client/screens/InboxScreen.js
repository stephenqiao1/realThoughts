import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MessageBox from "../components/MessageBox";

const InboxScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Inbox</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddFriends")}>
          <Ionicons name="person-add-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search friends..."
        placeholderTextColor="#B0B0B0"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageBox item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  searchBar: {
    backgroundColor: "#1E1E1E",
    borderRadius: 5,
    padding: 10,
    color: "#FFFFFF",
    marginBottom: 10,
  },
});

export default InboxScreen;
