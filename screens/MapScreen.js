import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/home/NavBar";
import { StyleSheet } from "react-native";
import MapHeader from "../components/map/MapHeader";
import Map from "../components/map/Map";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import CustomText from "../components/common/CustomText";

const MapScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  useEffect(() => {
    let loggedIn = AsyncStorage.getItem("AccessToken");
    if (!loggedIn) {
      navigation.navigate("loginScreen");
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      <MapHeader />

      <View style={styles.container}>
        <Map />
      </View>
      <View style={styles.mapBtnsContainer}>
        
        <View style={styles.mapBtnContainer}>
          <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/map/microscope.png')} />

          </View>
          <CustomText style={styles.btnTxt}>{t('laboratories')}</CustomText>
        </View>
        <View style={styles.mapBtnContainer}>
          <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/map/x-ray.png')} />

          </View>
          <CustomText style={styles.btnTxt}>{t('radiology')}</CustomText>
        </View>
        <View style={styles.mapBtnContainer}>
          <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/map/pharmacy.png')} />

          </View>
          <CustomText style={styles.btnTxt}>{t('pharmacies')}</CustomText>
        </View>
        <View style={styles.mapBtnContainer}>
          <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/map/ultrasound.png')} />

          </View>
          <CustomText style={styles.btnTxt}>{t('sonar')}</CustomText>
        </View>



      </View>



      <View style={styles.btnContainer}>
      <Text onPress={()=> navigation.navigate('medicationScreen')} style={styles.btn}>{t('medicationSearch')}</Text>
      </View>

      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  btnContainer:{
    flex: 1,
    backgroundColor: "#fff"
    ,width: '100%',
    position: "absolute",
    alignSelf:'center',
    justifyContent:'center',
    bottom: 100,
  },
  btn: {
    backgroundColor:'#528DA7',
    paddingHorizontal: 50,
    paddingVertical: 15
    , marginVertical: 10
    , width:'80%',
    alignSelf: 'center',
    textAlign:'center',
    color:'#fff',
    borderRadius:5,
    fontWeight:'700',
    fontSize:16
  },
  mapBtnsContainer: {
    flex: 1
    ,width: '100%',
    position: "absolute",
    alignSelf:'center',
    justifyContent: 'center',
    marginTop: 120,
    flexDirection: 'row',
    alignItems:'center'
  },
  mapBtnContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
    paddingVertical: 10,
    marginHorizontal: 1
    
    
  },
  imageContainer: {
    backgroundColor: '#528DA7',
    borderRadius: 50,
    padding: 5
  },
  image: {
    width: 20,
    height: 20,
    
    resizeMode:"contain"
  },
  btnTxt: {
    paddingHorizontal: 5,
    fontSize: 12
  }

});
export default MapScreen;
