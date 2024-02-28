import { ref, set } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";
import getUserCart from "./getUserCart";



export default function addToCart({product},quantity,userId) {
  const cartId = userId+"cart";
  const cart = getUserCart(userId);
  cart.push([product,quantity]);
  const productToAdd = ref(FIREBASE_DATABASE, "cart/" + cartId+ "/");
    set(productToAdd, cart);
}
  
