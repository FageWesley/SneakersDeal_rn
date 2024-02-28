import { ref, onValue } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";

export default function getUserCart(userId) {
  const cartId = userId + "cart";
  const cartRef = ref(FIREBASE_DATABASE, "cart/" + cartId + "/");
  const cartArray = [""];
  onValue(cartRef, (snapshot) => {
    try {
      const data = snapshot.val();
      for (let key in data) {
        cartArray.push(data[key]);
      }
    } catch (error) {
      return cartArray;
    }
  });

  return cartArray;
}
