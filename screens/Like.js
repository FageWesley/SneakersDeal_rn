import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import Card from '../components/Card'


export default function Like() {
  return (

    //Must do a FlatList with the liked items from the database
    <ScrollView style={styles.container}>
    <Text style={styles.title}>What you liked</Text>
    <View style={styles.line} />
    <View style={{alignItems:'center'}}>
      <Card >
        <Image style={styles.imageCard} source={require('../assets/images/AF1-LV.png')}/>
        <View >
        <Text style={styles.nameShoes}>Name of the shoes</Text>
        <Text style={styles.priceShoes}>$Price</Text>
        </View>
      </Card>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#E5E5E5',

    
  },
  imageCard: {
    width: 60,
    height: 60,

  },
  nameShoes: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  priceShoes: {
    fontSize: 14,
    fontWeight: 'thin',
    marginLeft: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginLeft: 15,
  },
  line: {
    borderTopColor: "#009C9D",
    borderTopWidth: 2,
    width: 250,
    marginLeft: 15,
    position: "absolute",
    marginTop: 45,
  },
})