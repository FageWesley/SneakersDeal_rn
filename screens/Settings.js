import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import IonsIcon from "react-native-vector-icons/Ionicons";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import Context from "../database/Context";

export default function Settings() {
  const logOut = async () => {
    await signOut(FIREBASE_AUTH);
  };
  const navigation = useNavigation()
  const user = useContext(Context)
  return (
    <View style={styles.container}>
      <Card route = "Infos" params={null}>
        <Text style={styles.SettingsCardTitle}>Personal informations</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
      </Card>
      <Card route = "Infos" params={null}>
        <Text style={styles.SettingsCardTitle}>Payment informations</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
      </Card>
      <Card route = "Infos" params={null}>
        <Text style={styles.SettingsCardTitle}>Addres informations</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
      </Card>
      
      {user.uid == "HrOss5G4KYeR023s5HvxZlS6Twp2" ? (<><Card route="Create" params={null}>
        <Text style={styles.SettingsCardTitle}>Add Product</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
        </Card>
        <Card route="Delete" params={null}>
        <Text style={styles.SettingsCardTitle}>Remove Product</Text>
        <IonsIcon
          name={"caret-forward-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
        </Card>
        </>
        ): null}

        
      <Card>
        <Text style={styles.SettingsCardTitle} onPress={logOut}>Log Out</Text>
        <IonsIcon
          name={"exit-outline"}
          color={"black"}
          size={24}
          style={styles.arrowIcon}
        />
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
