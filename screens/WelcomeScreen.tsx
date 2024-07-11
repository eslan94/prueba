import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NavigatorB from '../navigators/NavigatorB';

export default function WelcomeScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <MaterialCommunityIcons name="bank" size={100} color="black" />
      <TouchableOpacity
      style={styles.btn}
        onPress={()=>navigation.NavigatorB('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btn}
      onPress={()=>navigation.NavigatorB('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
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