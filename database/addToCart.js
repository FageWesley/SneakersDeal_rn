import { get, ref, set, update } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";
import getUserCart from "./getUserCart";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";

export default function addToCart(array, userId) {
  const cartId = userId + "cart";
  const productToAdd = ref(FIREBASE_DATABASE, "cart/");
  set(productToAdd, array)
  

  // const [userCart, setUserCart] = useState([]);
  // useEffect(() => {
  //   getUserCart(user.uid).then((snapshot) => {
  //     const data = snapshot.val();
  //     const cartArray = [];
  //     for (let key in data) {
  //       cartArray.push(data[key]);
  //     }
  //     setUserCart(cartArray);
  //   });
  // }, [userCart]);

  // console.log(cart);

  // let isInArray = false;
  // let productToUpdate;
  // let currentQuantity;

  // // Verify if the product is already in cart
  // for (let i = 0; i < cart.length; i++) {
  //   if (isEqual(cart[i][0], product)) {
  //     isInArray = true;
  //     productToUpdate = i;
  //     currentQuantity = cart[i][1];
  //     break;
  //   }
  // }

  // const newCart = setCart((prevCart) => {
  //   if (isInArray) {
  //     // Product already in cart, updating quantity
  //     prevCart[productToUpdate][1] = currentQuantity + quantity;
  //   } else {
  //     // Product not in cart, adding to cart
  //     prevCart.push([product, quantity]);
  //   }
  // });
}
