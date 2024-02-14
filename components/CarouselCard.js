import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function CarouselCard({item}) {
  return (
    <View style={styles.Card}>
        <View style={{width:'fit-content'}}>
            {/* <Image source={item.image}/> */}
        </View>
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