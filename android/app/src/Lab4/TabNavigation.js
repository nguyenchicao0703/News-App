import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Screen1') {
                iconName = focused
                    ? 'archive-sharp'
                    : 'add';
                } else if (route.name === 'Screen2') {
                iconName = focused 
                    ? 'arrow-down-circle-sharp' 
                    : 'at';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            })}
        >
        <Tab.Screen name="Screen1" component={Screen1} options={{title:"Trang chủ"}}/>
        <Tab.Screen name="Screen2" component={Screen2} options={{title:"Cài đặt"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})