import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import addToCart from "../database/addToCart";
import Context from "../database/Context";
import { useContext } from "react";

export default function ProductPage({ route, navigation }) {
  const { product } = route.params;
  const test = 1;
  const user = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.title}</Text>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Button
        title="add to cart"
        onPress={() => {
          addToCart({ product }, 1, user.uid);
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    alignSelf: "center",
    color: "red",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
