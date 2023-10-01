import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon}>
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>
            <Text style={styles.profileText}>Profile</Text>
            <Image source={{ uri: 'YOUR_PROFILE_IMAGE_URL'}} style={styles.profileImage}/>
            <Text style={styles.userName}>User Name</Text>
            <View style={styles.moodTrackerHeader}>
                <Text style={styles.moodTrackerTitle}>Mood Tracker</Text>
                <Text style={styles.visibilityText}>Only visible to you</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 20,
      alignItems: 'center',
    },
    goBackIcon: {
      position: 'absolute',
      top: 60,
      left: 20,
      zIndex: 1,
    },
    profileText: {
      fontSize: 24,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 40,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    userName: {
      fontSize: 30,
      color: '#FFFFFF',
      marginBottom: 20,
    },
    moodTrackerHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
      marginTop: 40
    },
    moodTrackerTitle: {
      fontSize: 28,
      color: '#FFFFFF',
      marginBottom: 10,
    },
    visibilityText: {
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: 'right',
    },
  });

  export default ProfileScreen;