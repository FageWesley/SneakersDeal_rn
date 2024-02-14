import { View, Text, Button, StyleSheet, Image, Modal } from "react-native";
import React from "react";
import { useState } from "react";
import Ionsicons from "react-native-vector-icons/Ionicons";

export default function TopBar() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.top}>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>SneakersDeal</Text>
      <Ionsicons
        name={"search"}
        color={"white"}
        size={24}
        style={styles.searchIcon}
        onPress={() => setModalVisible(!modalVisible)}
      ></Ionsicons>
      <Modal style={styles.modal} visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.top}>
            <Image
              source={require("../assets/images/Logo.png")}
              style={styles.logo}
            ></Image>
            <Text style={styles.title}>SneakersDeal</Text>
            <Ionsicons
              name={"close"}
              color={"white"}
              size={32}
              style={styles.searchIcon}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
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
});
