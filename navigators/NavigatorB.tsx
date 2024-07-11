import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OperationScreen from '../screens/OperationScreen'
import HistoryScreen from '../screens/HistoryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from '../screens/RegisterScreen'

const Stack= createStackNavigator()
function MyStack(){
    return(
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
            <Stack.Screen name='BottomTab' component={MyTabs}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()
function MyTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Operaciones" component={OperationScreen} />
            <Tab.Screen name="Historial" component={HistoryScreen}/>
        </Tab.Navigator>
    )
}


export default function NavigatorB() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  )
}
