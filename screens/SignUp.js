import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    KeyboardAvoidingView,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import { FIREBASE_AUTH } from "../FirebaseConfig";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  
export default function SignUp({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setloading] = useState(false);
  
    const signUp = async () => {
      setloading(true);
      try {
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          setloading(false);
          return;
        }
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
          <Image
            source={require("../assets/images/Logo.png")}
            style={styles.logo}
          />
          <View style={{ position: "absolute", top: -75, alignSelf: "center" }}>
            <Text style={{ color: "#ffff", fontSize:30, alignSelf: "center" }}>
              Log in to SneakersDeal
            </Text>
            <Text style={{ color: "#ffff", alignSelf: "center", fontSize: 18 }}>
              Dont have an account yet ?{" "}
              <Text style={{ color: "#009C9D", textDecorationLine: "underline" }} onPress={()=> navigation.goBack()}>
                Sign Up !
              </Text>
            </Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholderTextColor={"#cccccc"}
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholderTextColor={"#cccccc"}
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirm password"
            autoCapitalize="none"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            placeholderTextColor={"#cccccc"}
          ></TextInput>
          {loading ? (
            <ActivityIndicator size="large" color="#fffff" />
          ) : (
            <View style={styles.btnBox}>
              <Button title="SignUp" onPress={() => signUp()} color={"white"} />
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "black",
    },
    input: {
      marginVertical: 8,
      height: 50,
      borderWidth: 3,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "transparent",
      marginLeft: 45,
      marginRight: 45,
      borderColor: "#009C9D",
      color: "white",
      fontSize: 18,
    },
    logo: {
      width: 95,
      height: 95,
      alignSelf: "center",
      position: "absolute",
      top: -230,
    },
    btnBox: {
      marginVertical: 8,
      height: 40,
      marginLeft: 45,
      marginRight: 45,
      borderRadius: 10,
      width: 100,
      backgroundColor: "#009C9D",
      alignSelf: "center",
      position: "absolute",
      bottom: -160,
    },
  });