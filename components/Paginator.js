import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import React from "react";



export default function Paginator(data, scrollX) {
  const width = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        {/* const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        }); */}
        return <Animated.View key={i.toString()} style={[styles.dot, { width: 10 }]} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#009C9D",
    marginHorizontal: 8,
  },
});
