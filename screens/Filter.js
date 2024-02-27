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
import getAllProducts from "../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";

export default function Filter() {
  const [search, setSearch] = useState("");
  const allProducts = getAllProducts();
  const [filteredSearch, SetFilteredSearch] = useState([]);
  function handleFilter(searchTerm) {
    SetFilteredSearch(
      allProducts.filter((products) => products.title.includes(searchTerm))
    );
  }
  const navigation = useNavigation();
  return (
    <View style={styles.modal} animationType="slide">
      <View style={styles.modal}>
        <View style={styles.top}>
          <Ionsicons
            name={"close"}
            color={"white"}
            size={32}
            style={styles.searchIcon}
            onPress={() => navigation.goBack()}
          />
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
