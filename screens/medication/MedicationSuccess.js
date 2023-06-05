import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../../components/common/CommonHeader';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import NavBar from '../../components/home/NavBar'

const MedicationSuccessScreen = () => {
    const navigation = useNavigation();
    const {t} = useTranslation();


    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);



    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>

      
      
      <View style={{ flex: 1, alignItems: 'center',  }}>
        <Image style={styles.img} source={require('../../assets/images/medication/icon.png')} />
      
      
      <View style={styles.container}>
      <Text style={styles.text}>{t('medicationSuccessText')}</Text>
        <Text onPress={() => navigation.navigate('home')} style={styles.btn}>{t('done')}</Text>
        <Text style={styles.btn}>{t('myOrder')}</Text>
      </View>

      </View>

      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    img: {
        width:'60%',
        height:'25%',
        top:25,
        marginTop:100
    },
    container:{
        flex:1,
        marginTop: 50
        , width: '90%',
        alignContent:'center',
        alignItems:'center'
    },
    textInput:{
        width: '80%',
        height: 50,
        backgroundColor:'#fff',
        borderRadius: 15,
        padding: 10,
        fontSize: 18,
        color: '#000',
        fontWeight: '200',
        marginBottom:20
    },
    btn:{
        backgroundColor:'#528DA7'
        , width: '80%',
        paddingVertical:15,
        marginBottom: 20,
        borderRadius:10,
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        color: '#fff',
        fontSize: 18,
        fontWeight:'600'
    },
    text:{
        paddingVertical:25,
        fontSize: 20,
        textAlign:'center',
        paddingHorizontal:30,
        marginBottom:20
    }
})

export default MedicationSuccessScreen