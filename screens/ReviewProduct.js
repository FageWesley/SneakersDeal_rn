import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ReviewProduct({ navigation }) {
  return (
    <View>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
