import { get, ref, set, update } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";


export default function deleteProduct(id) {
    const productRef = ref(FIREBASE_DATABASE, "products/" + id);
    set(productRef, null);
}