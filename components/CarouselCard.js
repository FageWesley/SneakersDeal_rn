import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function CarouselCard({item}) {
  return (
    <View style={styles.Card}>
        <Image source={{uri : item.image}} style={styles.image}/>
        <View />
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.price}>{item.price}$</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Card:{
        borderRadius: 40,
        backgroundColor: '#f5f5f5',
        height: 350,
        width: 250,
        shadowColor: "#000",
        shadowOffset: {
          width:2,
          height: 3,
        },
        shadowOpacity: 0.25,
    },
    image:{
        height: 200,
        width: 200,
        borderRadius: 40,
        alignSelf:"center",
        marginTop: 20,
    },
    title:{
      alignSelf:"flex-start",
      fontWeight: "bold",
      fontSize: 22,
      marginTop: 30,
      marginLeft:20,
      marginRight: 20,
      

    },
    price:{
      alignSelf:"flex-end",
      fontWeight: "thin",
      fontSize: 18,
      marginTop: 10,
      marginRight: 30,
      fontStyle: "italic"
    }
})