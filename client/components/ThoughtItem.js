import { View, Text, Image, StyleSheet } from 'react-native';

const ThoughtItem = ({ thought }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: thought.profilePic }} style={styles.profilePic} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{thought.name}</Text>
                <Text style={styles.thought}>{thought.message}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1E1E1E',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    thought: {
        fontSize: 14,
        color: '#B0B0B0',
        marginTop: 5,
    }
});

export default ThoughtItem;