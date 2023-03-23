import { StyleSheet, Text, TextInput, View, Dimensions, Image, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AxiosIntance from '../ultil/AxiosIntance';

const PostNews = () => {
    const [image, setimage] = useState(null);
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");

    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);

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
        if(response.error == false) {
            setimage(response.data.path);
            ToastAndroid.show("Upload hình ảnh thành công", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Upload hình ảnh thất bại", ToastAndroid.SHORT);
        }
    }

    const capture = async () => {
        // Lấy link hình ảnh qua camera
        const result = await launchCamera();
        console.log(result.assets[0].uri);

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
        if(response.error == false) {
            setimage(response.data.path);
            ToastAndroid.show("Upload hình ảnh thành công", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Upload hình ảnh thất bại", ToastAndroid.SHORT);
        }
    }

    
    const post = async () => {
        const response = await AxiosIntance().post('/articles', {title: title, content: content, image: image});

        if(response.error == false) {
            ToastAndroid.show("Đăng tin thành công thành công", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Đăng tin thất bại", ToastAndroid.SHORT);
        }
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.mgContainer}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Create News</Text>
                
                <Pressable onPress={getImageLibrary}>
                    <Image style={styles.imageAlbum} source={require('./../Image/album.png')} />
                </Pressable>

                <Pressable onPress={capture}>
                    <Image style={styles.imageCamera}  source={require('./../Image/camera.png')} />
                </Pressable>
            </View>
            <>
            {
                image == null ? (
                    <Image style={styles.imageAddCoverPhoto} source={require('./../Image/AddNewsPhoto.png')} />
                ) : (
                    <Image style={styles.imageAddCoverPhoto} source={{uri: image}} />  
                )
            }
            </>
            <Text style={styles.titleInput}>Title</Text>
            
            <TextInput style={styles.textInputTitle} 
                placeholder="News title" 
                onChangeText={settitle}  
                placeholderTextColor="#A1A1A1" 
                multiline={true} />

            <Text style={styles.titleInput}>Content</Text>

            <TextInput style={styles.textInputContent} 
                placeholder="Content ..." 
                onChangeText={setcontent} 
                placeholderTextColor="#A1A1A1" 
                multiline={true} />
        </View>

        <View style={styles.bottom}>
            <Image style={styles.imageBottom} source={require('./../Image/Bottom_1.png')} />

            <Image style={styles.imageBottom} source={require('./../Image/Bottom_2.png')} />

            <Image style={styles.imageBottom} source={require('./../Image/Bottom_3.png')} />

            <Image style={styles.imageBottom} source={require('./../Image/Bottom_4.png')} />
            
            <Pressable style={styles.buttonPublish} onPress={post}>
                <Text style={styles.textButtonPublish}>Publish</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default PostNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mgContainer: {
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    textHeader: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        left: 30
    },
    imageAlbum: {
        left: 70
    },
    imageCamera: {
        left: 85
    },
    imageAddCoverPhoto: {
        width: '100%',
        height: 200,
    },
    titleInput: {
        color: 'black',
        fontSize: 18,
        opacity: 0.7,
        marginTop: 25,
    },
    textInputTitle: {
        height: 45,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4E4B66',
        padding: 10,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    textInputContent: {
        height: 220,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4E4B66',
        paddingBottom: 180,
        padding: 10,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        placeholderTextColor: '#000000',
    },
    bottom: {
        width: '100%',
        height: 80,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 0.2,
        borderColor: '#C4C2C2' ,
        backgroundColor: 'white'
    },
    imageBottom: {
        marginHorizontal: 16
    },
    buttonPublish: {
        width: 110,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 8,
        backgroundColor: '#1877F2',
        left: 60
    },
    textButtonPublish: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 0.12,
    },
    
})