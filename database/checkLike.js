import { ref, set, update } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";


export default function checkLike({ product }, userId) {

  const checkLike = ref(
    FIREBASE_DATABASE,
    "like/"+ product.id + "/" + userId
  );
  
  onValue(cartRef, (snapshot) => {
    const data = snapshot.val();
    if (data == null) {
      return cartArray;
    }else{
    for (let key in data) {
      cartArray.push(data[key]);
    }
  }
  
});
  return cartArray;
}

