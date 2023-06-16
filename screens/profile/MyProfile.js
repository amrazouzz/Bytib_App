import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CommonHeader from '../../components/common/CommonHeader'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getHeaderWithAuth } from '../../api/APIHeaders'
import { API_URL } from '../../api/api'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import * as Icons from 'react-native-heroicons/outline'


const MyProfile = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const headers = await getHeaderWithAuth();
        const response = await fetch(`${API_URL}/my_info/`, {
          headers: headers,
        });
        const data = await response.json();
        console.log(data); // Log the fetched data
    
        // Update the state with the fetched user info
        setUserInfo(data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchUserInfo();
  }, []);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
    },)})
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
        <CommonHeader headerTilte={t('myProfileHeader')} />
      
        <ScrollView style={{marginBottom:10}}>

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{ uri: userInfo?.photo }}
            /> 
          </View>
                 <View style={{alignContent:"center", alignItems:'center'}}>
                    <Text style={styles.name}>{userInfo?.full_name}</Text>
                    <Text onPress={() => navigation.navigate('editMyProfile')} style={styles.city}> <Icons.PencilIcon size={15} color={'#000'} /> {t('editProfile')}</Text>
                </View>

            {/* BIO */}
          <View style={styles.whiteContainer}>
            <Text className='font-extrabold text-xl'>{t('bio')}</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

          </View>
          <View style={styles.whiteContainer}>
          <Text className='font-extrabold text-xl'>{t('general')}</Text>

          <View style={styles.info}>
            <Icons.UserIcon size={25} color={'#000'} />

            <View style={styles.infoText}>
            <Text className='text-lg'>{t('name')}</Text>
            <Text className='text-lg text-gray-400 font-bold'>{userInfo?.full_name}</Text>
            </View>
          </View>
          <View style={styles.info}>
          <Icons.InboxStackIcon size={25} color={'#000'} />

            <View style={styles.infoText}>
            <Text className='text-lg'>{t('eMail')}</Text>
            <Text className='text-lg text-gray-400 font-bold'>{userInfo?.email}</Text>

            </View>
          </View>
          <View style={styles.info}>
          <Icons.PhoneIcon size={25} color={'#000'} />

            <View style={styles.infoText}>
            <Text className='text-lg'>{t('mobile')}</Text>
            <Text className='text-lg text-gray-400 font-bold'>{userInfo?.tel_number}</Text>

            </View>
          </View>
          <View style={styles.info}>
          <Icons.CalendarIcon size={25} color={'#000'} />

            <View style={styles.infoText}>
            <Text className='text-lg'>{t('dob')}</Text>
            <Text className='text-lg text-gray-400 font-bold'>{userInfo?.date_of_birth}</Text>

            </View>
          </View>
          <View style={styles.info}>
          <Icons.UserPlusIcon size={25} color={'#000'} />

            <View style={styles.infoText}>
            <Text className='text-lg'>{t('gender')}</Text>
            <Text className='text-lg text-gray-400 font-bold'>{userInfo?.gender}</Text>

            </View>
          </View>
          <View style={styles.info}>
          <Icons.MapPinIcon size={25} color={'#000'} />

            <View style={styles.infoText}>
            <Text className='text-lg'>{t('city')}</Text>
            <Text className='text-lg text-gray-400 font-bold'>{userInfo?.city_name}</Text>
            </View>
          </View>
          

          </View>
      
          </View>
          </ScrollView>




    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        top: 30
      },
      imageContainer: {
        width: 123,
        height: 123,
        borderRadius: 75,
        backgroundColor: "#528DA7",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      },
      profileImage: {
        width: 118,
        height: 118,
        borderRadius: 60,
        borderColor:'#fff',
        borderWidth:3
      },
      name:{
        fontWeight:'800',
        fontSize: 28,
      },
      whiteContainer:{
        backgroundColor:'#fff',
        padding:10,
        width:'90%',
        borderRadius:15,
        marginVertical:10
      },
      info:{
        borderBottomWidth: 1,
        borderBottomColor: "#DCDCDC",
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center'
      },
      infoText:{
        flexDirection:'column',
        marginLeft:10,
      }
})

export default MyProfile