import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import News from './News';
import ItemListNew from './ItemListNew';
import NewsDetail from './NewsDetail';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='News'>
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})