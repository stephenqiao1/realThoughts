import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import NameScreen from "./screens/NameScreen";
import ShareThoughtScreen from "./screens/ShareThoughtScreen";
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
              elevation: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitle: '',
            headerLeft: ({ onPress }) => (
              <Ionicons 
                name="arrow-back"
                size={32}
                color="#007BFF"
                style={{ marginLeft: 10 }}
                onPress={onPress}
              />
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
              elevation: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: '#fff',
            headerTitle: '',
            headerShadowVisible: false,
          }} 
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen
          name="ShareThought"
          component={ShareThoughtScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
