import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "./CarouselCard";
import getAllProducts from "../database/getAllProduct";

export default function MainCarousel() {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    getAllProducts().then((snapshot) => {
      const data = snapshot.val();
      const productsArray = [];
      for (let key in data) {
        productsArray.push(data[key]);
      }
      setProducts(productsArray);
    });
  }, []);
  return (
    <>
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={products}
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
