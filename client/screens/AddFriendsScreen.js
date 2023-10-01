import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FindFriendsItem from "../components/FindFriendsItem";
import { Ionicons } from "@expo/vector-icons";

const AddFriendsScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Friends</Text>
        <View style={{ width: 28 }} />
      </View>
      <TextInput
        styles={styles.searchBar}
        placeholder="Search for friends..."
        placeholderTextColor="#B0B0B0"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={users}
        renderItem={({ item }) => <FindFriendsItem item={item} />}
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
    justifyContent: "center", // Center the title
    alignItems: "center",
    marginBottom: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: "#1E1E1E",
    borderRadius: 5,
    padding: 10,
    color: "#FFFFFF",
    marginBottom: 10,
  },
});

export default AddFriendsScreen;
