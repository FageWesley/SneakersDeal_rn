import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React, {useState, useEffect} from "react";
import Context from "../database/Context";
import { useContext } from "react";
import getUserCart from "../database/getUserCart";
import ProductCard from "../components/ProductCard";
import removeFromCart from "../database/removeFromCart";


export default function Cart({ navigation }) {
  user = useContext(Context);
  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    getUserCart(user.uid).then((snapshot) => {
      const data = snapshot.val();
      const cartArray = [];
      for (let key in data) {
        cartArray.push(data[key]);
      }
      setUserCart(cartArray);
    });
  }, []);
  if (!userCart.length == 0) {
    return (
      <View>
        <FlatList
          data={userCart}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <ProductCard route="ProductPage" product={item}>
                <Image source={{ uri: item[0].image }} style={styles.image} />
              </ProductCard>
              <View style={styles.itemText}>
              <Text style={styles.title}>{item[0].title}</Text>
              <Text style={styles.price}>${item[0].price}</Text>
              <Text style={{color:'black',fontSize:15}}>Quantity : {item[1]}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={()=>removeFromCart(item,user.uid)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
              </View>
              
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={1}
          contentContainerStyle={{ paddingBottom: 200 }}
        />

        <TouchableOpacity style={styles.proceedButton}>
          <Text>Proceed to payment</Text>
        </TouchableOpacity>
      </View>

      
    );
  } else {
    return (
      // use context to pass user data and recup the cart then check if the cart is empty or not
      <View style={styles.container}>
        <View style={styles.emptyCart}>
          <Image
            source={require("../assets/images/Jordan4-military.png")}
            style={styles.cartImage}
          />
          <Text style={styles.text}>
            Your cart is empty.{"\n"} start shopping{" "}
            <Text
              style={styles.linkToShop}
              onPress={() => navigation.navigate("Search")}
            >
              here.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 40,
  },
  emptyCart: {
    width: 361,
    height: 138,
    backgroundColor: "#212529",
    marginTop: 20,
    flexDirection: "row",
    borderRadius: 5,
  },
  linkToShop: {
    color: "#009C9D",
    textDecorationLine: "underline",
  },
  cartImage: {
    width: 146,
    height: 100,
    marginTop: 40,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  itemCard:{  
    flexDirection:'row',
    marginLeft: 10,
    marginRight: 10,
  
  },
  title: {
    fontSize: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 180,
  },
  itemText:{
    flexDirection:'column',
    marginLeft: 10,
    marginTop: 10,
  },
  removeButton:{
    backgroundColor: "black",
    width: 70,
    height: 30,
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  removeButtonText:{
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
  proceedButton:{
    backgroundColor: "#009C9D",
    width: 200,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
});
