import { ref, set, update } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";
import getUserCart from "./getUserCart";
import { isEqual } from "lodash";
import { useState } from "react";


export default function addToCart({ product }, quantity, userId) {
  const cartId = userId + "cart";
  const cart = getUserCart(cartId);
  let isInArray = false;
  let productToUpdate;
  let currentQuantity;

  // Verify if the product is already in cart
  for (let i = 0; i < cart.length; i++) {
    if (isEqual(cart[i][0], product)) {
      isInArray = true;
      productToUpdate = i;
      currentQuantity = cart[i][1];
      console.log(i);
      console.log(productToUpdate);
      break;
    }
  }
  if (isInArray) {
    console.log("Product already in cart, updating quantity");
    updatedQuantity = currentQuantity + quantity;
    const productToAdd = ref(
      FIREBASE_DATABASE,
      "cart/" + cartId + "/" + productToUpdate + "/" + 1 + "/"
    );
    set(productToAdd, updatedQuantity);
  } else {
    console.log("Product not in cart, adding to cart");
    cart.push([product, quantity]);
    const productToAdd = ref(FIREBASE_DATABASE, "cart/" + cartId);
    set(productToAdd, cart);
  }

  // console.log(JSON.stringify(cart));
}
