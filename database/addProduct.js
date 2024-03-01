import { get, ref, set, update } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";
import getUserCart from "./getUserCart";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import getAllProducts from "./getAllProduct";

export default function addProduct(title, price, image, brand) {
    
    console.log(title, price, image, brand);
   const productList = ()=> getAllProducts().then((snapshot) => {
            const data = snapshot.val();
            const productArray = [];
            for (let key in data) {
                productArray.push(data[key]);
            }
            return productArray;
        }
        );
  
    productList().then((result) => {
        const nextItem = result.length + 1;
        const productRef = ref(FIREBASE_DATABASE, "products/" + nextItem);
        const newProduct = {
            id: nextItem,
            title: title,
            price: price,
            image: image,
            brand: brand,
        };
        
        set(productRef, newProduct);
    }); 
}