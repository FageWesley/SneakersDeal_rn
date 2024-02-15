import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function CarouselCard({item}) {
  return (
    <View style={styles.Card}>
        <Image source={item.image} style={{height: 200, width: 200, borderRadius: 40}}/>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}/>
            <Text>{item.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Card:{
        borderRadius: 40,
        backgroundColor: 'gray',
        height: 350,
        width: 250,
    }
})