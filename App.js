import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import TopBar from "./components/TopBar";
import MainPageInfo from "./components/MainPageInfo";
import MainPageBrand from "./components/MainPageBrand";
import MainPageCarousel from "./components/MainPageCarrousel";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/homeStack";
import BottomBar from "./routes/Navigation";

const adidas = {
  name: "Adidas",
  logo: require("./assets/images/Adidas-logo.png"),
};
const nike = {
  name: "Nike",
  logo: require("./assets/images/Nike-logo-cropped.png"),
};
const new_balance = {
  name: "New Balance",
  logo: require("./assets/images/New-Balance-logo.png"),
};
const jordan = {
  name: "Jordan",
  logo: require("./assets/images/Jordan-logo.png"),
};

export default function App() {
  return (
    // <NavigationContainer>
    //   <ScrollView>
    //     <View style={styles.container}>
    //       <TopBar />
    //       <MainPageInfo></MainPageInfo>
    //       <View style={styles.brandBoxes}>
    //         <MainPageBrand logo={nike.logo} />
    //         <MainPageBrand logo={adidas.logo} />
    //         <MainPageBrand logo={new_balance.logo} />
    //         <MainPageBrand logo={jordan.logo} />
    //       </View>
    //       <View style={styles.carrousel}>
    //         <Text style={styles.nextDrops}>Next Drops</Text>
    //         <View style={styles.line} />
    //         <MainPageCarousel></MainPageCarousel>
    //       </View>

    //       <StatusBar style="auto" />
    //     </View>
    //   </ScrollView>
    // </NavigationContainer>
    
      <BottomBar/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECEEEE",
    alignItems: "center",
    justifyContent: "center",

    flex: 1,
  },
  brandBoxes: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  carrousel: {
    marginTop: 75,
    height: 600,
  },
  nextDrops: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginLeft: 20,
  },
  line: {
    borderTopColor: "#009C9D",
    borderTopWidth: 2,
    width: 200,
    marginLeft: 20,
    position: "absolute",
    marginTop: 40,
  },
});
