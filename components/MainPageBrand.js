import { View, Text, Button,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function MainPageBrand(props) {
  return (
    <View style={styles.brandBox}>
      <Image style={styles.logoInBox} source={props.logo}/>
    </View>
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