import { ref, set, update } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";
import getUserCart from "./getUserCart";
import { isEqual } from "lodash";
import { useState } from "react";

export default function removeFromCart(product , userId) {
  const cartId = userId + "cart";
  const cart = getUserCart(userId);
  let productToDeleteIndex;
  let isInArray = false;

  for (let i = 0; i < cart.length; i++) {
    if (isEqual(cart[i][0], product[0])) {
      console.log(cart[i]);
      
      
      isInArray = true;
      break;
    }
    
  }

//   if (isInArray) {
//     const productToDelete = ref(
//       FIREBASE_DATABASE,
//       "cart/" + cartId + "/" + productToDeleteIndex
//     );
//     set(productToDelete, null);
//     console.log("Product removed from cart");
//   }
}
