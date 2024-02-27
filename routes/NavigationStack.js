import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import createAppContainer from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewProduct from "../screens/ReviewProduct";
import ListPage from "../screens/ListPage";
import ProductPage from "../screens/ProductPage";
import Search from "../screens/Search";
import Like from "../screens/Like";

const Nav = createStackNavigator();
export const HomeStack = () => {
  return (
    <Nav.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
    }} >
      <Nav.Screen name="ProductPage" component={ProductPage} />
      <Nav.Screen name="Search" component={Search} />
      <Nav.Screen name="Home" component={Home} />
      
    </Nav.Navigator>
  );
};

export default function NavigationStack() {
  return (
    <NavigationContainer independent={true}>
      <HomeStack />
    </NavigationContainer>
  );
}
