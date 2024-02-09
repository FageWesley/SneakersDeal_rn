import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ReviewProduct({ navigation }) {
  return (
    <View>
      <Text>Review Product</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
