import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ProductPage({route, navigation}) {
 const {product} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.title}</Text>
      <Image source={{uri: product.image}} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    justifyContent:'center',
    alignSelf:'center',
    color:'red'
  },
  container: {
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     
  },
  image:{
    width:200,
    height:200,
  }
})