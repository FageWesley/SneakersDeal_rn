import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import icons
import Ionicons from "react-native-vector-icons/Ionicons";
//import screens
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Like from "../screens/Like";
import Settings from "../screens/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductPage from "../screens/ProductPage";
import NavigationStack from "./NavigationStack";

const homeName = "Home";
const heartName = "Like";
const settingsName = "Settings";
const cartName = "Cart";


const Tab = createBottomTabNavigator();


export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === cartName) {
              iconName = focused ? "cart" : "cart-outline";
            }
            else if (route.name === heartName) {
              iconName = focused ? "heart" : "heart-outline";
            }
            else if (route.name === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: "#009C9D",
          tabBarInactiveTintColor: "white",
          headerShown: false,
          tabBarStyle: { backgroundColor:"#212529", paddingTop:15, height:90},
          tabBarHideOnKeyboard: true,
          
        })}
      >
        <Tab.Screen name={homeName} component={NavigationStack} options={{tabBarLabel: ''}} />
        <Tab.Screen name={cartName} component={Cart} options={{tabBarLabel: ''}}/>
        <Tab.Screen name={heartName} component={Like} options={{tabBarLabel: ''}}/>
        <Tab.Screen name={settingsName} component={Settings} options={{tabBarLabel: ''}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
