import React, { useContext, useState } from 'react'
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Pressable, ToastAndroid } from 'react-native'
import { AppContext } from '../ultil/AppContext'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AxiosIntance from '../ultil/AxiosIntance';

function UpdateProfile() {
  const {infoUser, setinfoUser} = useContext(AppContext);

  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    console.log(infoUser);

    // Đưa link hình ảnh vào file formdata
    // Upload hình ảnh lên server
    const formdata = new FormData();
    formdata.append('image', {
        uri: result.assets[0].uri,
        type: 'image/jpg', // Loại của file 'image'. Định dạng của hình ảnh 'jpg'
        name: 'image.jpg', // Tên của file
    });

    // Gọi api upload hình ảnh lên server
    const response = await AxiosIntance('multipart/form-data').post('/media/upload', formdata);
    console.log(response.data.path);

    setinfoUser({...infoUser, avatar: response.data.path});
  }

  const updateProfile = async () => {
    const response = await AxiosIntance().post("/users/update-profile", {name: infoUser.name, address: infoUser.address, phone: infoUser.phone, avatar: infoUser.avatar, dob: infoUser.dob});
    if(response.error == false) {
      ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.mgContainer} >
            <View style={styles.toolbarContainer}>
                <Image style={styles.ivArrow} source={require('./../Image/left-arrow.png')} />

                <Text style={styles.titleProfile}>Fill your Profile</Text>
            </View>

            <Pressable >
              {
                infoUser.avatar == '' ? (
                  <Image style={styles.ivAvt}/>
                ) : (
                  <Image style={styles.ivAvt} source={{uri: infoUser.avatar}}/>
                )
              }
            </Pressable>

            <Pressable style={styles.ivEditAvtContainer} onPress={getImageLibrary}>
                <Image style={styles.ivEditAvt} source={require('./../Image/camera.png')}/>
            </Pressable>
            
            <Text style={styles.txt}>Email Address</Text>

            <TextInput style={styles.input} keyboardType='email-address' value={infoUser.email} onChangeText={(text) => setinfoUser({...infoUser, email: text})} />

            <Text style={styles.txt}>Username</Text>

            <TextInput style={styles.input} value={infoUser.name} onChangeText={(text) => setinfoUser({...infoUser, name: text})} />

            <Text style={styles.txt}>Address</Text>

            <TextInput style={styles.input} keyboardType='address' value={infoUser.address} onChangeText={(text) => setinfoUser({...infoUser, address: text})} />
            
            <Text style={styles.txt}>Phone Number</Text>

            <TextInput style={styles.input} keyboardType='number-pad' value={infoUser.phone} onChangeText={(text) => setinfoUser({...infoUser, phone: text})} />

            <Text style={styles.txt}>Birthday</Text>

            <TextInput style={styles.input} value={infoUser.dob} onChangeText={(text) => setinfoUser({...infoUser, dob: text})} />
        </View>
        <TouchableOpacity style={styles.btnNext} uppercase={false} onPress={updateProfile}>
            <Text style={styles.txtNext}>Next</Text>
        </TouchableOpacity>
        <View style={styles.other}/>

        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
      },
      mgContainer: {
        marginHorizontal: 20,
        marginTop: 20
      },
      toolbarContainer: {
      },
      ivArrow: {
        position: 'absolute',
        justifyContent: 'flex-start'
      },
      titleProfile: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
        textAlign: 'center'
      },
      ivAvt: {
        width: 140,
        height: 140,
        borderRadius: 80,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#EEF1F4',
        alignSelf: 'center',
        marginTop: 30
      },
      ivEditAvtContainer: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#1877F2',
        marginTop: 160,
        marginLeft: 200
      },
      ivEditAvt: {
        alignSelf: 'center',
        marginTop: 5 
      },
      txt: {
        fontSize: 15,
        color: '#000000',
        opacity: 0.9,
        marginTop: 25
      },
      input: {
        height: 45,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4E4B66',
        padding: 10,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        // marginTop: 10
      },
      btnNext: {
        backgroundColor: '#1877F2',
        paddingVertical: 15,
        marginTop: 30,
        borderRadius: 6,
        marginHorizontal: 20,
      },
      txtNext: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      other: {
        backgroundColor: '#000000',
        height: 1.5,
        marginTop: 80,
        opacity: 0.1,
      }
})

export default UpdateProfile