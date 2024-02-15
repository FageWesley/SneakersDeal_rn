import { View, Text, Button,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function MainPageBrand(props) {
  return (
    <TouchableOpacity style={styles.brandBox}>
      <Image style={styles.logoInBox} source={props.logo}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    brandBox: {
        width: 170,
        height: 170,
        backgroundColor: '#009C9D',
        borderRadius: 5,
        marginLeft:18,
        marginTop: 30,
        overflow: 'hidden',

    
    },
    logoInBox: {
        width: 200,
        height: 160,
    }
})