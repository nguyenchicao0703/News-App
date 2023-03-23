import { View, Text, TextInput, FlatList } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Login from './android/app/src/Lab3/Login';
import News from './android/app/src/Lab4/News';
import ItemListNew from './android/app/src/Lab4/ItemListNew';
import StackNavigation from './android/app/src/Lab4/StackNavigation';
import TabNavigation from './android/app/src/Lab4/TabNavigation';
import NewsDetail from './android/app/src/Lab4/NewsDetail';
import Screen1 from './android/app/src/Lab4/Screen1';
import Screen2 from './android/app/src/Lab4/Screen2';
import Register from './android/app/src/Lab3/Register';
import AppNavigator from './android/app/src/ultil/AppNavigator';
import { AppContextProvider } from './android/app/src/ultil/AppContext';
import Profile from './android/app/src/Lab4/Profile';
import BaoVe from './android/app/src/BaoVe/BaoVe';
import Cart from './android/app/src/BaoVe/Cart';


const App = () => { 
  return (
    <View style={{flex: 1}}>
      <AppContextProvider>
        <NavigationContainer>
          <AppNavigator/>
        </NavigationContainer>
      </AppContextProvider>
        {/* <Register></Register> */}
      </View>
  )
}

export default App