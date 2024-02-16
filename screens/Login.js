import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setloading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    //   const user = userCredential.user;
      console.log(response);
    } catch (error) {
        alert('Sign in failed' + error.message);
        console.log(error);
    }
    setloading(false);
  }
  const signUp = async () => {
    setloading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
        alert('Sign in failed' + error.message);
        console.log(error);
    }
    setloading(false);
  }

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView behavior="padding">
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      ></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        value={password}
      ></TextInput>
      {loading ? 
        <ActivityIndicator size="large" color="#00ff00" />
      : <>
        <Button title="Login" onPress={()=> signIn()} /> 
        <Button title="other" onPress={()=> signUp()} />
      </>}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
});
