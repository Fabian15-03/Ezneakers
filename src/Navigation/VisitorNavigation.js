import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
//import Onboarding from '../Screens/Visitor/Onboarding'
import Home from '../Screens/Visitor/Home'
import Login from '../Screens/Visitor/Login'
import Register from '../Screens/Visitor/Register'
import Terms from '../Screens/Visitor/Tyc'
import How from '../Screens/Visitor/How'
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function VisitorNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="How" component={How} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

