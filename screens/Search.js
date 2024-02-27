import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import ProductCard from "../components/ProductCard";

export default function Search({ route }) {
  const { productList } = route.params;

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
    alignSelf: "flex-start",
  },
});
