import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import NavigatorB from '../navigators/NavigatorB';
import firebase from '../config/Config';

export default function LoginScreen({navigation}:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.NavigatorB('Inicio');
    } catch (err:any) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text>{error}</Text> : null}
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    color:'white',
    fontSize:20, 
    alignItems:'center',
    justifyContent:'center'
  },

  imgbackground: {
    width: Dimensions .get("screen").width, //for full screen
    height: Dimensions.get("screen").height, //for full screen
    resizeMode:"cover",
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text:{
    color:'black',
    fontSize:20
  },

  input:{
    width: "80%",
    height: 45,
    marginBottom: 30,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#eee",
    paddingLeft: 20,
  },

  titulo: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 130,
    marginBottom: 50,
    color:'white'
  },
  btn: {
    width: 100,
    height: 40,
    borderColor:'black',
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
})