import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import addProduct from "../database/addProduct";
import SelectDropdown from "react-native-select-dropdown";
import Ionsicons from "react-native-vector-icons/Ionicons";

export default function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  const brands = ["Nike", "Adidas", "New_balance", "Jordan"];

  useEffect(() => {
    setBrand("Select a brand");
  }, []);

  return (
    <View>
      <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold" }}>
        Create Form
      </Text>
      <TextInput
        placeholder="title"
        onChangeText={(text) => setTitle(text)}
        style={styles.textInput}
        ref={(input) => {
          this.t = input;
        }}
        fontSize={20}
        
      ></TextInput>
      <TextInput
        placeholder="price"
        onChangeText={(text) => setPrice(text)}
        style={styles.textInput}
        ref={(input) => {
          this.p = input;
        }}
        fontSize={20}
      ></TextInput>
      <TextInput
        placeholder="image"
        onChangeText={(text) => setImage(text)}
        style={styles.textInput}
        ref={(input) => {
          this.i = input;
        }}
        fontSize={20}
      ></TextInput>
      <SelectDropdown
        data={brands}
        onSelect={(selectedItem, index) => {
          setBrand(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.textInput}
        ref={(input) => {
          this.b = input;
        }}
        defaultButtonText="Select a brand"
        renderDropdownIcon={() => {
          return (
            <Ionsicons
              name={"caret-down-outline"}
              color={"black"}
              size={24}
              style={styles.arrowIcon}
            />
          );
        }}
      />
      <View style={styles.buttonBox}>
        <Button
          title="add"
          color={"white"}
          disabled={
            title === "" ||
            price === "" ||
            image === "" ||
            brand === "Select a brand"
              ? true
              : false
          }
          onPress={() => {
            addProduct(title, price, image, brand);
            this.t.clear();
            this.p.clear();
            this.i.clear();
            this.b.reset();
            setImage("");
            setTitle("");
            setPrice("");

            alert("Product added");
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    width: "80%",
  },
  buttonBox: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 10,
    width: "50%",
    alignSelf: "center",
  },
});
