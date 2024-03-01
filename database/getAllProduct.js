import { ref, onValue, get } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";

export default function getAllProducts() {
  const productRef = ref(FIREBASE_DATABASE, "products/");
  const productsArray = [];
  return get(productRef);

  // , (snapshot) => {
  //   const data = snapshot.val();
  //   for (let key in data) {
  //     productsArray.push(data[key]);
  //   }
  // });

  // return productsArray;
}
