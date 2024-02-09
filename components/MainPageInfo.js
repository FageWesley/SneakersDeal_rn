import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function MainPageInfo() {
  return (
    <View style={styles.box}>
      <View style={styles.textInBox}>
        <Text style={styles.formatText}>Your <Text style={{color:'#009C9D'}} >sneakers</Text> to the best price and in a <Text style={{color:'#009C9D'}}>secured</Text> way</Text>
      </View>
        <Image source={require('../assets/images/Jordan1.png')} style={styles.shoesInBox}/>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        width: 359,
        height: 140,
        backgroundColor: '#212529',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        flexDirection: 'row',
    
    },
    shoesInBox: {
        width: 150,
        height: 100,
        right: 0,
        justifyContent: 'center',
        position: 'absolute',
        },
      textInBox: {
        marginTop:10,
        width: 175,
        position: 'absolute',
        top: 0,
        left: 0,
        height: 200,
          
      },
      formatText:{
        color: 'white',
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 10,
        marginLeft:10, 
        position: 'absolute',
        fontWeight: 'bold',
      },
      
    })
   