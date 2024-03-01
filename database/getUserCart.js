import { ref, onValue,get } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";

export default function getUserCart(userId) {
  const cartRef = ref(FIREBASE_DATABASE, "cart/" + userId + "cart");
  return get(cartRef)
;}
