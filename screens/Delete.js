import { StyleSheet, Text, View , TextInput, Button} from 'react-native'
import React, { useState } from 'react'
import deleteProduct from '../database/deleteProduct'


export default function Delete() {
  const [id, setId] = useState('')

  return (
    <View>
      <Text style={{ margin: 10, fontSize: 20, fontWeight: "bold" }}>Delete</Text>
      <TextInput placeholder='ID product' onChangeText={(text)=>setId(text)} style={styles.textInput} fontSize={20}></TextInput>
      <View style={styles.buttonBox}>
      <Button title='delete' onPress={()=>deleteProduct(id)} disabled={id == "" ? true : false} color={"white"} ></Button></View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width:"80%",
    alignSelf: "center",
  },
  buttonBox: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 10,
    width: "50%",
    alignSelf: "center",
  },
});