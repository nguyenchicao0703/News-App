import React, { useContext, useState } from 'react'
import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import News from '../Lab4/News';
import { AppContext } from './AppContext';
import Register from '../Lab3/Register';
import Login from '../Lab3/Login';
import Screen1 from '../Lab4/Screen1';
import Screen2 from '../Lab4/Screen2';
import NewsDetail from '../Lab4/NewsDetail';
import ItemListNew from '../Lab4/ItemListNew';
import PostNews from '../Lab4/PostNews';
import Test from '../Lab4/Test';
import Profile from '../Lab4/Profile';
import UpdateProfile from '../Lab3/UpdateProfile';

const NewsStack = () => {
    return(
        <Stack.Navigator  screenOptions={{headerShown:false}}>
            <Stack.Screen name='News' component={News}/>
            <Stack.Screen name='NewsDetail' component={NewsDetail}/>
            <Stack.Screen name='ItemListNew' component={ItemListNew}/>
        </Stack.Navigator>
    )
}

// Quản lí login, register => stack
const Stack = createNativeStackNavigator();
const Users = () => {
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="PostNews" component={PostNews} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

// Quản lí news, detail news, profile, new manager => tab
const Tab = createBottomTabNavigator();
const Main = () => {
    return(
        // headerShown:false
        <Tab.Navigator screenOptions={({route})=> ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'NewsStack') {
                return <Image source={require('./../Image/home.png')} />
              }
              else if (route.name === 'PostNews') {
                return <Image source={require('./../Image/explore.png')} />
              }
              else if (route.name === 'UpdateProfile') {
                return <Image source={require('./../Image/bookmark.png')} />
              }
              else if (route.name === 'Profile') {
                return <Image source={require('./../Image/profile.png')} />
              }
              
            },
            tabBarActiveTintColor: '#1877F2',
            tabBarInactiveTintColor: 'gray',
            headerShown:false
          })}
        >
            <Tab.Screen name="NewsStack" component={NewsStack} options={{title: "Trang chủ"}} />
            <Tab.Screen name="PostNews" component={PostNews} options={{title: "Đăng tin"}}/>
            <Tab.Screen name="UpdateProfile" component={UpdateProfile} options={{title: "Bookmark"}}/>
            <Tab.Screen name="Profile" component={Profile} options={{title: "Trang cá nhân"}}/>
        </Tab.Navigator>
    );
}

const AppNavigator = () => {
    const {isLogin} = useContext(AppContext);
  return (
    <>
    {
        isLogin == false ? <Users/> : <Main/>
    }
    </>
  );
}

export default AppNavigator