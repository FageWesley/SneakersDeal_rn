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
import Search from "../screens/Search";
import Create from "../screens/Create";
import Update from "../screens/Update";
import Delete from "../screens/Delete";
import Settings from "../screens/Settings";

import ProductByBrand from "../screens/ProductByBrand";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductPage from "../screens/ProductPage";
import Filter from "../screens/Filter";
import Infos from "../screens/Infos";

const homeName = "Home";
const heartName = "Like";
const settingsName = "Settings";
const cartName = "Cart";

const Tab = createBottomTabNavigator();
const Nav = createNativeStackNavigator();

function TabBar() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === cartName) {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === heartName) {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#009C9D",
          tabBarInactiveTintColor: "white",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#212529",
            paddingTop: 15,
            height: 90,
          },
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tab.Screen
          name={homeName}
          component={StackNavigation }
          options={{ tabBarLabel: "" }}
        />
        <Tab.Screen
          name={cartName}
          component={Cart}
          options={{ tabBarLabel: "" }}
        />
        <Tab.Screen
          name={heartName}
          component={Like}
          options={{ tabBarLabel: "" }}
        />
        <Tab.Screen
          name={settingsName}
          component={Settings}
          options={{ tabBarLabel: "" }}

        />
      </Tab.Navigator>
    
  );
}

function StackNavigation() {
  return (
    <Nav.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name="ProductPage" component={ProductPage} />
      <Nav.Screen name="Search" component={Search} />
      <Nav.Screen name="HomeScreen" component={Home} />
      <Nav.Screen
        name="Create"
        component={Create}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="Update"
        component={Update}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="Delete"
        component={Delete}
        options={{ headerShown: false }}
      />
      <Nav.Screen name="Settings" component={Settings} />
      <Nav.Screen name="Filter" component={Filter} />
      <Nav.Screen name="Brand" component={ProductByBrand} />
      <Nav.Screen name="Infos" component={Infos} />
      
      
    </Nav.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
    <TabBar />
    </NavigationContainer>
  );
}