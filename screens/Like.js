import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import TopBar from '../components/TopBar'

export default function Like() {
  return (
    <ScrollView style={styles.container}>
    <TopBar/>
    <Text style={styles.title}>What you liked</Text>
    <View style={styles.line} />
      <Card>
        <Image style={styles.imageCard} source={require('../assets/images/AF1-LV.png')}/>
        <View >
        <Text style={styles.nameShoes}>Name of the shoes</Text>
        <Text style={styles.priceShoes}>$Price</Text>
        </View>
      </Card>
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginLeft: 20,
  },
  line: {
    borderTopColor: "#009C9D",
    borderTopWidth: 2,
    width: 200,
    marginLeft: 20,
    position: "absolute",
    marginTop: 40,
  },
})