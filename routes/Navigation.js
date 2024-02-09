import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import icons
import Ionicons from "react-native-vector-icons/Ionicons";
//import screens
import Home from "../screens/Home";
import ReviewProduct from "../screens/ReviewProduct";

const homeName = "Home";
const reviewName = "ReviewProduct";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === reviewName) {
              iconName = focused ? "heart" : "heart-outline";
            }
            else if (route.name === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 12,
            paddingBotton: 10,
          },
          style : {padding :10, height: 70}
        }}
      
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={reviewName} component={ReviewProduct} />
        <Tab.Screen name={settingsName} component={ReviewProduct} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    

    backgroundColor: "blue",
  },
});
