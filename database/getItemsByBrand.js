import { ref, onValue } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";


export default function getItemsByBrand(brand) {
    const productsFilteredRef = ref(FIREBASE_DATABASE, "products/");
    const productsArray = [];
    let value;
    onValue(productsFilteredRef, (snapshot) => {
      const data = snapshot.val();
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          value = data[key].brand;
        }
  
        if (value == brand) {
          productsArray.push(data[key]);
          // console.log(productsArray)
        }
      }
});

    return productsArray;
}