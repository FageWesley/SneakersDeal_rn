import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function ProductCard(props) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={()=> navigation.navigate(props.route,{product:props.product})}
     style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    card:{
        borderRadius:3,
        elevation:3,
        backgroundColor:'#f5f5f5',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.1,
        shadowRadius:2,
        marginHorizontal:2,
        marginVertical:2,
        width: 185,
        height: 190,
        
        
        
    },
    cardContent:{
        marginVertical:8,
        marginHorizontal:8,

    },
})