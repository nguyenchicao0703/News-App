import { StyleSheet, Text, View, Image, ToastAndroid,ActivityIndicator, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import AxiosIntance from '../ultil/AxiosIntance';

const NewsDetail = (props) => {
    const {route} = props;
    const {params} = route;
    const [imageUrl, setImageUrl] = useState("");
    const [area, setArea] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setLoading] = useState(true);

    // Gọi api
    useEffect(() => {
      const getDetail = async () => {
        const response = await AxiosIntance().get("/articles/" + params.id + "/detail");
        console.log(response);
        if(response.error == false) {
            setImageUrl(response.data[0].image);
            setTitle(response.data[0].title);
            setContent(response.data[0].content);
            setLoading(false);
        } else {
            ToastAndroid.show("Lấy thông tin chi tiết bài viết thất bại", ToastAndroid.SHORT);
        }
      }
      getDetail();
      return () => {
      }
    }, [])
    

  return (
    <>
    {
        isLoading == true ? 
        <View style={styles.loadingContainer}> 
            <ActivityIndicator size='large' color='#fff00'/>
            <Text style={styles.loadingText}>Loading...</Text>
        </View>
         : 
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <View style={styles.mgContainer}>
                <View style={styles.header} >
                    <View styles={styles.avtContainer}>
                        <Image style={styles.avt} source={require('./../Image/Ellipse.png')} />
                    </View>

                    <View style={styles.nameTimeContainer}>
                        <Text style={styles.name}>BBC News</Text>

                        <Text style={styles.time}>14mm ago</Text>
                    </View>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Following</Text>
                    </Pressable>
                </View>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                </View>

                {/* <Text style={styles.textEurope}>{area}</Text> */}

                <Text style={styles.contentTitle}>{title}</Text>

                <Text style={styles.content}>{content}</Text>

                <Image style={styles.interact} source={require('./../Image/detailNewsInteract.png')} />
            </View>
        </ScrollView>
    }
    </>
  )
}

export default NewsDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    mgContainer: {
        marginHorizontal: 10
    },

    header: {
        marginTop: 30,
        flexDirection: 'row'
    },
    nameTimeContainer: {
        marginLeft: 10
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    time: {
        color: 'black',
        fontSize: 14,
        opacity: 0.7
    },
    button: {
        backgroundColor: '#1877F2',
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 15,
        marginLeft: 140
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    image: {
        marginTop: 20,
    },
    textEurope: {
        color: 'black',
        fontSize: 16,
        opacity: 0.6,
        marginTop: 10
    },
    contentTitle: {
        color: 'black',
        fontSize: 23,
        marginTop: 5,
    },
    content: {
        color: 'black',
        fontSize: 17,
        opacity: 0.7,
        marginTop: 10
    },
    interact: {
        marginTop: 20
    }
})