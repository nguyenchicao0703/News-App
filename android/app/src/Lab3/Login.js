import React, {useContext, useState} from 'react'
import {StyleSheet, Text, TextInput, Image, TouchableOpacity, View, StatusBar, ToastAndroid, Alert} from 'react-native'
import CheckBox from '@react-native-community/checkbox' 
import AxiosIntance from '../ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { AppContext } from '../ultil/AppContext';

function Login(props) {
  const {navigation} = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [email, setEmail] = useState("chicao1@gmail.com");
  const [password, setPassword] = useState("1234");
  const {setIsLogin, setinfoUser} = useContext(AppContext);

  // Chuyển sang screen register
  const stackRegister = () => {
    navigation.navigate('Register');
  }

  const login = async () => {
    try {
      const response = await AxiosIntance().post("/auth/login",
      {
        "email": email,
        "password": password
      });
      if (response.error == false) {
        console.log(response.data.token);
        await AsyncStorage.setItem('token', response.data.token); // Lưu token
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
        navigation.navigate('News'); // Đăng nhập thành công chuyển sang screen News
        setinfoUser(response.data.user);
        setIsLogin(true);
      } else {
        ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
      }
    }
    catch(e) {
      alert("Error");
      console.log("error");
    }
  }

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor='white'/>
        <View style={styles.titleContainer}>
          {/* {isSignUp ? ( <Text style={styles.titleHello}>Login</Text>) : null} */}
          <Text style={styles.titleHello}>Login</Text>

          <Text style={styles.titleAgain}>Again!</Text>

          <Text style={styles.titleWelcome}>Welcome back you've been missed</Text>

          <Text style={styles.txtUserPassword}>Username</Text>

          <TextInput 
            style={styles.input}
            onChangeText={setEmail} 
          >
            <Text>chicaotest@gmail.com</Text>
          </TextInput>

          <Text style={styles.txtUserPassword}>Password</Text>

          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              secureTextEntry
              onChangeText={setPassword}
            >
              <Text>1234</Text>
            </TextInput>
            <Image style={styles.ivPass} source={require('./../Image/ivPass.jpg')}/>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />

            <Text style={styles.texxtt}>Remember</Text>
          </View>
          
          <TouchableOpacity style={styles.buttonContainer} uppercase={false} onPress={login}>
            <Text style={styles.txtLogin}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.txtOr}>or continue with</Text>
          
          <View style={styles.buttonFastContainer}>
            <TouchableOpacity style={styles.buttonFast}uppercase={false}>
              <View style={styles.buttonFastStyle}>
                <Image style={styles.ivFast} source={require('./../Image/facebook.png')} />
                <Text style={styles.txtFast}>Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFast}uppercase={false}>
              <View style={styles.buttonFastStyle}>
                <Image 
                style={styles.ivFast} source={require('./../Image/google.png')} />
                <Text style={styles.txtFast}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          {/* <Pressable onPress={() => setSignUp(!isSignUp)}><Text style={styles.txtRegister}>Don't have an account ?</Text></Pressable> */}
          <Pressable onPress={stackRegister}>
            <Text style={styles.txtRegister}>Don't have an account ? Register</Text>
          </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      position: 'relative'
    },
    checkboxContainer: {
      flexDirection: 'row'
    },
    checkbox: {
      top: 10,
    },
    texxtt: {
      color: 'black',
      fontSize: 20,
      marginTop: 10
    },
    ivPass: {
      position: 'absolute',
      top: 20,
      right: 10
    },
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1
    },
    titleContainer: {
      marginTop: 10,
      marginHorizontal: 20,
    },
    titleHello: {
      fontWeight: 'bold',
      fontSize: 45,
      color: '#000000'
    },
    titleAgain: {
      fontWeight: 'bold',
      fontSize: 45,
      color: '#1877F2'
    },
    titleWelcome: {
      fontSize: 25,
      color: '#000000',
      fontSize: 20,
      maxWidth: 200,
      opacity: 0.7,
      marginVertical: 20,
      fontStyle: 'italic'
    },
    txtUserPassword: {
      color: '#000000',
      fontSize: 18,
      opacity: 0.7,
      marginTop: 20
    },
    input: {
      height: 45,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#4E4B66',
      padding: 10,
      color: '#000000',
      backgroundColor: '#FFFFFF',
      marginTop: 10
    },
    // checkbox: {
    //   alignSelf: 'center',
    // },
    buttonContainer: {
      backgroundColor: '#1877F2',
      paddingVertical: 15,
      marginTop: 20,
      borderRadius: 6
    },
    txtLogin: {
      color: '#FFFFFF',
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    txtOr: {
      color: '#000000',
      fontSize: 16,
      opacity: 0.7,
      marginTop: 20,
      textAlign: 'center'
    },
    buttonFastContainer: {
      flexDirection: 'row',
      justifyContent:'center',
      paddingBottom: 10
    },
    buttonFastStyle: {
      flexDirection: 'row',
      justifyContent:'center',
    },
    buttonFast: {
      backgroundColor: '#EEF1F4',
      paddingVertical: 15,
      paddingHorizontal: 30,
      alignSelf: 'flex-start',
      marginHorizontal: 20,
      marginTop: 20,
      borderRadius: 6
    },
    txtFast: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
      opacity: 0.7,
      marginLeft: 10
    },
    txtRegister: {
      color: '#000000',
      fontSize: 16,
      opacity: 0.5,
      marginTop: 15,
      textAlign: 'center',
      fontStyle: 'italic'
    }
  })

export default Login