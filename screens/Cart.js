import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ListPage from "./ListPage";

export default function Cart({ navigation }) {
  return (
    
    <View style={styles.container}>
      <View style={styles.emptyCart}>
        <Image
          source={require("../assets/images/Jordan4-military.png")}
          style={styles.cartImage}
        />
        <Text style={styles.text}>
          Your cart is empty.{"\n"} start shopping{" "}
          <Text
            style={styles.linkToShop}
            onPress={() => navigation.navigate("ListPage")}
          >
            here.
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 40,
  },
  emptyCart: {
    width: 361,
    height: 138,
    backgroundColor: "#212529",
    marginTop: 20,
    flexDirection: "row",
    borderRadius: 5,
  },
  linkToShop: {
    color: "#009C9D",
    textDecorationLine: "underline",
  },
  cartImage: {
    width: 146,
    height: 100,
    marginTop: 40,
  },
});
