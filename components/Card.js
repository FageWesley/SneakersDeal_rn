import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


export default function Card(props, {navigation}) {
  return (
    <TouchableOpacity
     style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    card:{
        borderRadius:5,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
        width: 361,
        height: 75,
        
        
        
    },
    cardContent:{
        marginVertical:8,
        marginHorizontal:8,
        flexDirection:'row',

    },
})