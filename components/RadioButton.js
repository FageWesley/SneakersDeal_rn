import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useState } from "react";

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    setUserOption(value);
    onSelect(value);
  };
  return (
    <View style={styles.sizeContainer}>
      {data.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              selectHandler(item.value);
            }}
            key={item.key}
            style={
              item.value === userOption ? styles.selected : styles.unselected
            } 
          >
            <Text style={styles.sizeText}>EU {item.value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    unselected: {
      alignItems: "center",
      borderColor:"gray",
      borderWidth:0.5,
      width:80,
      height:45,
      borderRadius:5,
      margin:5,
    },
    selected: {
      alignItems: "center",
      borderColor:"black",
      borderWidth:1.5,
      width:80,
      height:45,
      borderRadius:5,
      margin:5,
    },
    sizeText: {
      fontSize: 18,
      fontWeight: "500",
      marginTop: 10,
    },
    sizeContainer: {
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:"center",
    },
});
