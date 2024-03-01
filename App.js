import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import {
  NavigationContainer,
  NavigationContext,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_APP, FIREBASE_AUTH } from "./FirebaseConfig";
import ProductPage from "./screens/ProductPage";
import Ionsicons from "react-native-vector-icons/Ionicons";
import useNavigation from "@react-navigation/native";
import Filter from "./screens/Filter";
import Context from "./database/Context";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Context.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator initalRouteName="Login">
          {user ? (
            <Stack.Screen
              name="InsideApp"
              component={BottomBar}
              options={({ navigation }) => ({
                headerBackground: () => <TopBar />,
                title: "",
                headerRight: () => (
                  <Ionsicons
                    name={"search"}
                    color={"white"}
                    size={24}
                    style={{ marginRight: 7, marginBottom: 7 }}
                    onPress={() => navigation.navigate("Filter")}
                  />
                ),
              })}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />

          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        </Stack.Navigator>
        
      </NavigationContainer>
    </Context.Provider>
  );
}
