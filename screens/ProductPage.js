import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import addToCart from "../database/addToCart";
import Context from "../database/Context";
import { useContext } from "react";
import RadioButton from "../components/RadioButton";
import { sizeData } from "../components/Size";
import Ionsicons from "react-native-vector-icons/Ionicons";
import setLike from "../database/setLike";
import getUserCart from "../database/getUserCart";

export default function ProductPage({ route, navigation }) {
  const { product } = (route.params || {});
  const test = 1;
  const user = useContext(Context);
  const [size, setSize] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLike({ product }, user.uid);
    } else {
      console.log("unliked");
    }
  };
  const [userCart, setUserCart] = useState([]);
  
  handleAddToCart = () => {
    setUserCart([...userCart, { product, size, quantity: 1}]);
    addToCart(userCart, user.uid);
  };

  useEffect(() => {
    getUserCart(user.uid).then((snapshot) => {
      const data = snapshot.val();
      const cartArray = [];
      for (let key in data) {
        cartArray.push(data[key]);
      }
      setUserCart(cartArray);
    });
  }, [userCart]);

  
  return (
    <ScrollView>
      <Text style={styles.text}>{product.title}</Text>
      <Text style={styles.price}>{product.price}$</Text>
      <View style={styles.imageBox}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <RadioButton data={sizeData} onSelect={(value) => setSize(value)} />
      <View style={styles.buttons}>
        {/* Si aucune taille n'est choisis ne pas rajouter au panier  */}
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            handleAddToCart();
          }}
        >
          <Text style={styles.cartText}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToLikeButton}
          onPress={() => {
            handleLike();
          }}
        >
          <Ionsicons
            name={isLiked ? "heart-outline" : "heart"}
            color={"white"}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "flex-start",
    margin: 20,
    marginBottom: 0,
    fontSize: 28,
    fontWeight: "500",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 380,
    height: 380,
    backgroundColor: "#F5F5F5",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
  },
  price: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "500",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  addToCartButton: {
    backgroundColor: "black",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50,
  },
  cartText: {
    color: "white",
    fontSize: 20,
  },
  addToLikeButton: {
    backgroundColor: "#009C9D",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20,
  },
  LikeText: {
    color: "white",
    fontSize: 20,
  },
});
