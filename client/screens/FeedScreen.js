import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThoughtItem from '../components/ThoughtItem';

const FeedScreen = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState('friends');
    const [thoughts, setThoughts] = useState([]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
                    <Ionicons name="mail-outline" size={28} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Explore</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person-outline" size={28} color="white" />
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                placeholderTextColor="#B0B0B0" 
            />
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'friends' && styles.selectedTab]}
                    onPress={() => setSelectedTab('friends')}
                >
                    <Text style={styles.tabText}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'everyone' && styles.selectedTab]}
                    onPress={() => setSelectedTab('everyone')}
                >
                    <Text style={styles.tabText}>Everyone</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={thoughts}
                renderItem={({ item }) => (
                    <ThoughtItem thought={item} />
                )} 
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    searchBar: {
        backgroundColor: '#1E1E1E',
        borderRadius: 5,
        padding: 10,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    tab: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent'
    },
    selectedTab: {
        borderBottomColor: '#007BFF',
    },
    tabText: {
        color: '#FFFFFF',
    },
})

export default FeedScreen;