import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import IonsIcon from "react-native-vector-icons/Ionicons";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.SettingsCardTitle}>Personal informations</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
      </Card>
      <Card>
        <Text style={styles.SettingsCardTitle}>Payment informations</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
      </Card>
      <Card>
        <Text style={styles.SettingsCardTitle}>Addres informations</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
      </Card>
      <Card>
        <Text style={styles.SettingsCardTitle}>Log Out</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEEEE",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "black",
    alignContent: "center",
  },
  SettingsCardTitle: {
    fontSize: 24,
    flex: 1,
    marginTop: 15,
  },
  arrowIcon: {
  marginTop: 18,
  },
});
