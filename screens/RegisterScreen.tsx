import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '@react-native-firebase/auth';
import NavigatorB from '../navigators/NavigatorB';
import { auth, firestore } from '../config/Config';

export default function RegisterScreen({navigation}:any) {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string>('');

  const handleRegister = async () => {
    setError('');
    if (!email || !password || !phone) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        
        await firestore.collection('users').doc(phone).set({
            email: email,
            phone: phone,
        })
       
        navigation.navigate('Login');
      } catch (err: any) {
        setError(err.message || 'Error al registrar');
      }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      {error ? <Text>{error}</Text> : null}
      <Button title="Registrar" onPress={handleRegister} />
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