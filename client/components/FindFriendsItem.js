import { View, StyleSheet } from "react-native";

const FindFriendsItem = ({ item }) => {
  return (
    <View style={styles.userBox}>
      <Text style={styles.userName}>{item.name}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1E1E1E",
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 5,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#FFFFFF",
  },
});

export default FindFriendsItem;
