import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useState } from "react";
import getAllProducts from "../database/getAllProduct";
import { useNavigation } from "@react-navigation/native";

export default function TopBar() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const allProducts = getAllProducts();
  const [filteredSearch, SetFilteredSearch] = useState([]);
  function handleFilter(searchTerm) {
    SetFilteredSearch(
      allProducts.filter((products) => products.title.includes(searchTerm))
    );
  }

  return (
    <View style={styles.top}>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>SneakersDeal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // modal:{
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //  },
  top: {
    width: "100%",
    height: 90,
    position: "fixed",
    top: 0,
    paddingBottom: 10,
    backgroundColor: "#212529",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  searchIcon: {
    position: "absolute",
    right: 20,
    bottom: 10,
  },
  searchInput: {
    width: 361,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
    paddingLeft: 5,
  },
  searchClearIcon: {
    position: "absolute",
    top: 108,
    right: 20,
  },
  image: {
    flexDirection: "row",
    height: 150,
    width: 150,
    borderRadius: 0,
    alignSelf: "flex-start",
  },
  container: {
    alignSelf: "center",
  },
});
