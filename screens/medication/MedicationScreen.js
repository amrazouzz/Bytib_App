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

const MedicationScreen = () => {
    const navigation = useNavigation();
    const {t} = useTranslation();


    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);



    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>

        <CommonHeader headerTilte={t('searchMedicationHeader')} />
      
      
      <View style={{ flex: 1, alignItems: 'center',  }}>
        <Image style={styles.img} source={require('../../assets/images/medication/svg.png')} />
      
      
      
      <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder={t('searchMedication')} />
        <Text style={styles.btn}>{t('launchCamera')}</Text>
        <Text style={styles.btn}>{t('chooseImg')}</Text>
        <Text onPress={()=>navigation.navigate('medicationSuccess')} style={styles.btn}>{t('sending')}</Text>
      </View>

      </View>

      

      <NavBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    img: {
        width:'80%',
        height:'25%',
        top:25
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
    }
})

export default MedicationScreen