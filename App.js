import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomePage from './Screens/HomePage';
import SecondPage from './Screens/SecondPage';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        options={{title:'Anasayfa'}} 
        component={HomePage}/>
        <Stack.Screen 
        name='Second'
        options={{title:'Ikinci Sayfa'}} 
        component={SecondPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}