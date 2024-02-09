import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "boo", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "boo1", rating: 5, body: "lorem ipsum", key: "2" },
    { title: "boo2", rating: 5, body: "lorem ipsum", key: "3" },
    { title: "boo3", rating: 5, body: "lorem ipsum", key: "4" },
    { title: "bookit", rating: 5, body: "lorem ipsum", key: "5" },
  ]);
  const pressHandler = () => {
    // navigation.navigate('ReviewProduct');
    navigation.push("ReviewProduct");
  };

  return (
    <View >
      <FlatList
        
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewProduct", item)}
          >
            <Text style={styles.container}>{item.title}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        fontSize : 30,
        margin:10,
    }
});
