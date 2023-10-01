import { View, Image, Text, StyleSheet } from "react-native";

const MessageBox = ({ item }) => {
  return (
    <View style={styles.messageBox}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic}/>
      <View style={styles.messageTextContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#B0B0B0",
  },
  timeAgo: {
    fontSize: 12,
    color: "#B0B0B0",
    marginLeft: 10,
  },
});

export default MessageBox;
