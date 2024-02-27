import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import slides from "../slides";
import CarouselCard from "./CarouselCard";
import { productsArray } from "../FirebaseConfig";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { FIREBASE_DATABASE } from "../FirebaseConfig";

export default function MainCarousel() {
  const products = ref(FIREBASE_DATABASE, "products/");
  const productsArray = [];
  onValue(products, (snapshot) => {
    const data = snapshot.val();
    for (let key in data) {
      productsArray.push(data[key]);
    }
  });

  return (
    <>
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={productsArray}
        renderItem={({ item }) => <CarouselCard item={item} />}
        firstItem={0}
        inactiveSlideScale={0.75} //size of the inactive slides
        inactibeslideOpacity={0.77} //opacity of the inactive slides
        sliderWidth={400} //actuall slide width
        itemWidth={260} //Card width
        slideStyle={{ display: "flex", alignItems: "stretch" }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
