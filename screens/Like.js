import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import getAllProducts from "../database/getAllProduct";
import { useContext } from "react";
import Context from "../database/Context";

export default function Like() {
  const [likedList, setLikedList] = useState([]);
  useEffect(() => {
    getAllProducts().then((snapshot) => {
      const data = snapshot.val();
      const likedArray = [];
      for (let key in data) {
        likedArray.push(data[key]);
      }
      setLikedList(likedArray);
    });
  }, []);

  return (
    <View>
      <View style={{backgroundColor:"#F5F5F5", zIndex:1, width:"100%",height:50}}>
        <Text style={styles.title}>What you liked</Text>
        <View style={styles.line}></View>
      </View>
      <FlatList
        data={likedList}
        renderItem={({ item }) => (
          <Card route="ProductPage" product={item}>
            <Image source={{ uri: item.image }} style={styles.imageCard} />
            <Text style={styles.nameShoes}>{item.title}</Text>
          </Card>
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={{
          paddingBottom: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5F5",
  },
  nameShoes: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
    width: 170,
    marginTop: 10,
  },

  line: {
    borderTopColor: "#009C9D",
    borderTopWidth: 2,
    width: 250,
    marginLeft: 15,
    position: "absolute",
    marginTop: 45,
    zIndex: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginLeft: 20,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  imageCard: {
    height: 60,
    width: 100,
    borderRadius: 0,
  },
});
