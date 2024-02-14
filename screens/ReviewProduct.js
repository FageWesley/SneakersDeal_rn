import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
 
export default function ReviewProduct({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "boo", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "boo1", rating: 5, body: "lorem ipsum", key: "2" },
    { title: "boo2", rating: 5, body: "lorem ipsum", key: "3" },
    { title: "boo3", rating: 5, body: "lorem ipsum", key: "4" },
    { title: "bookit", rating: 5, body: "lorem ipsum", key: "5" },
  ]);
  // const pressHandler = () => {
  //    navigation.navigate('ReviewProduct');

  // };

  return (
    <>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductPage", item)}
          >
            <Text style={styles.container}>{item.title}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    margin: 10,
  },
});
