import {
  StyleSheet,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import ProductCard from "../components/ProductCard";
import getAllProducts from "../database/getAllProduct";
import { useState, useEffect } from "react";

export default function Search() {
  
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getAllProducts().then((snapshot) => {
      const data = snapshot.val();
      const productArray = [];
      for (let key in data) {
        productArray.push(data[key]);
      }
      setProductList(productArray);
    });
   
   }, []);
  

  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={productList}
          renderItem={({ item }) => (
            <ProductCard route="ProductPage" product={item}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </ProductCard>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={styles.container}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
  },
  image: {
    flexDirection: "row",
    height: 150,
    width: 150,
    borderRadius: 0,
    alignSelf: "center",
    marginTop: 5,
  },
});
