import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import Ionsicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import getAllProducts from "../database/getAllProduct";
import { useNavigation } from "@react-navigation/native";

export default function Filter() {
  const [search, setSearch] = useState("");
  const [filteredSearch, SetFilteredSearch] = useState([]);
  function handleFilter(searchTerm) {
    SetFilteredSearch(
      allProducts.filter((products) => products.title.includes(searchTerm))
    );
  }
  const allProducts = getAllProducts();
  const navigation = useNavigation();
  return (
    <View style={styles.modal} animationType="slide">
      <View style={styles.modal}>
        <View style={styles.top}>
        <Ionsicons
            name={"arrow-back"}
            color={"black"}
            size={32}
            style={styles.searchIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.backText}>Close</Text>
          
        </View>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          onChangeText={(search) => {
            setSearch(search);
            handleFilter(search);
          }}
          ref={(input) => {
            this.TextInput = input;
          }}
        ></TextInput>
        <Ionsicons
          name={"close"}
          color={"black"}
          size={32}
          style={styles.searchClearIcon}
          onPress={() => {
            setSearch("");
            this.TextInput.clear();
          }}
          onScroll={() => Keyboard.dismiss()}
        />
        <FlatList
          data={search == "" ? allProducts : filteredSearch}
          renderItem={({ item }) => (
            <ProductCard route="ProductPage" product={item}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </ProductCard>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 200 }}
        />
        {search !== "" && filteredSearch.length == 0 ? (
          <Text style={styles.notFound}>No products found</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    top: 72,
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
  top: {
   flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  searchIcon:{
    marginTop: 1.5,
    marginRight: 2,
    
  },
  notFound: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight:"bold",
  },
});
