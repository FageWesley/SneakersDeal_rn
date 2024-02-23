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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const signIn = async () => {
    setloading(true);
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          break;
      }
    }
    setloading(false);
  };
  const signUp = async () => {
    setloading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already in use");
        case "auth/invalid-email":
          alert("Invalid email");
        case "auth/weak-password":
          alert("Weak password");
        case "auth/operation-not-allowed":
          alert("Operation not allowed");
        case "auth/argument-error":
          alert("Argument error");
          break;

        default:
          
          break;
      }
    }
    setloading(false);
  };
  
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
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <>
            <Button title="Login" onPress={() => signIn()} />
            <Button title="other" onPress={() => signUp()} />
          </>
        )}
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
