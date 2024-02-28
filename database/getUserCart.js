import { ref, onValue } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";

export default function getUserCart(cartId) {
  const cartRef = ref(FIREBASE_DATABASE, "cart/" + cartId + "/");
  const cartArray = [];
  onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      for (let key in data) {
        cartArray.push(data[key]);
      }
  });

  return cartArray;
}
