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
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

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
  }
});
export default MapScreen;
