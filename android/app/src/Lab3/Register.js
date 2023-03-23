import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, Image, TouchableOpacity, View, StatusBar, ToastAndroid, Alert} from 'react-native'
import CheckBox from '@react-native-community/checkbox' 
import AxiosIntance from '../ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Register = (props) => {
  const {navigation} = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Chuyển sang screen Login
  const stackLogin = () => {
    navigation.navigate("Login");
  }

  const register = async () => {
    try {
      const response = await AxiosIntance().post("/users/register", {email: email, password: password});
      console.log(response);
      if(response.error == false) {
        ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
        navigation.navigate("Login");
      } else {
        ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT);
      }
    } catch(e) {
      console.log("Error");
    }
  }

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor='white'/>
        <View style={styles.titleContainer}>
          <Text style={styles.titleHello}>Hello!</Text>

          <Text style={styles.titleWelcome}>Sign up to get Stared</Text>

          <Text style={styles.txtUserPassword}>Username</Text>

          <TextInput 
            style={styles.input}
            onChangeText={setEmail} 
          />

          <Text style={styles.txtUserPassword}>Password</Text>

          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              secureTextEntry
              onChangeText={setPassword}
            />
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

          <TouchableOpacity style={styles.buttonContainer} uppercase={false} onPress={register}>
            <Text style={styles.txtButtonRegister}>Register</Text>
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
          <Pressable onPress={stackLogin}>
            <Text style={styles.txtRegister}>Already have an account ? Login</Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Register

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
        marginLeft: 10,
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
        color: '#1877F2'
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
        backgroundColor: 'green',
        paddingVertical: 15,
        marginTop: 20,
        borderRadius: 6
      },
      txtButtonRegister: {
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