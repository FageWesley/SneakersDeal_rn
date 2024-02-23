import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_APP, FIREBASE_AUTH } from "./FirebaseConfig";





const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();



export default function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer >
    {user ? (<TopBar/>) : null}
      <Stack.Navigator initalRouteName="Login">
        {user ? (
          
          <Stack.Screen
            name="InsideApp"
            component={BottomBar}
            options={{ headerShown: false }}
          />
          
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
