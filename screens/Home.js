import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import MainPageInfo from "../components/MainPageInfo";
import MainPageBrand from "../components/MainPageBrand";
import MainCarousel from "../components/MainCarousel";
import { nike, adidas, new_balance, jordan } from "../components/Brands";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStack from "../routes/NavigationStack";
import { NavigationContainer } from "@react-navigation/native";
import ProductPage from "../screens/ProductPage";
import { useNavigation } from "@react-navigation/native";


export default function App() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {/* First box  */}
        <View style={[styles.container, { alignItems: "center" }]}>
          <MainPageInfo></MainPageInfo>

          <View style={styles.brandBoxes}>
            <MainPageBrand logo={nike.logo}/>
            <MainPageBrand logo={adidas.logo} />
            <MainPageBrand logo={new_balance.logo} />
            <MainPageBrand logo={jordan.logo} />
          </View>
        </View>

        {/* Carrousel component */}
        <View style={styles.carrousel}>
          <Text style={styles.nextDrops}>Next Drops</Text>
          <View style={styles.line} />
          <View style={{ marginTop: 75 }}></View>
          <MainCarousel></MainCarousel>
        </View>
        <Button
          title="faitmwenchié"
          onPress={() => navigation.navigate("ProductPage")}
          color={"red"}
        ></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECEEEE",
    justifyContent: "center",
    marginTop: 20,
    flex: 1,
  },
  brandBoxes: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  carrousel: {
    marginTop: 40,
    height: 600,
    backgroundColor: "white",
    width: 361,
    borderRadius: 5,
    height: 450,
    alignItems: "center",
    marginLeft: 17,
  },
  nextDrops: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginLeft: 20,
    position: "absolute",
    top: 0,
    left: 0,
  },
  line: {
    borderTopColor: "#009C9D",
    borderTopWidth: 2,
    width: 200,
    position: "absolute",
    marginTop: 40,
    left: 20,
  },
});
