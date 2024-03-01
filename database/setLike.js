import { ref, set, update } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";

export default function setLike({ product }, userId) {
  const likeRef = ref(FIREBASE_DATABASE, "like/" + product.id);
  const unlikeRef = ref(FIREBASE_DATABASE, "like/" + product.id + "/" + userId);
  set(Like, [{ userId, productId: product.id }]);
}
