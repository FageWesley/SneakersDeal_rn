import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

export default MainPageCarrouselItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {/* <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{flex:0.3}}>
      <Text style={styles.title}>{item.title }</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  image: {
    width: "fit-content",
  },
});
