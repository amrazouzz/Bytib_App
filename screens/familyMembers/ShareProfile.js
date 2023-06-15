import {
    View,
    Text,
    StyleSheet,
    PermissionsAndroid,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { useTranslation } from "react-i18next";
  import { useLayoutEffect } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import CommonHeader from "../../components/common/CommonHeader";
  import { Camera, CameraType } from "expo-camera";
  import { Picker } from "@react-native-picker/picker";
  
  const ShareProfile = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
     
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    
  
    return (
      <View style={styles.screen}>
        <SafeAreaView>
          <View>
            <CommonHeader headerTilte={t("shareProfile")} />
          </View>
        </SafeAreaView>
        <View style={styles.container}>

          <Text style={styles.label}>{t("shareProfileTxt")}</Text>
  
          <View style={styles.caneraContainer}>
            <Image style={styles.image} source={require('../../assets/images/family/qr.png')} />
          </View>
  
          
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: "#eaf5fa",
      flex: 1,
    },
    container: {
        alignItems: "center",
        top:100,
      flex: 1,
    },
    caneraContainer: {
      width: 250,
      height: 250,
      overflow: "hidden",
        marginVertical: 20,
        alignSelf: 'center',
      left:25
    },
    label: {
      fontSize: 18,
      marginBottom: 80,
        alignSelf: "center",
        textAlign: 'center',
      paddingHorizontal:50
    },
    input: {
      width: "100%",
      height: 50,
      borderRadius: 15,
      padding: 10,
      marginBottom: 20,
      backgroundColor: "#fff",
    },
    button: {
      backgroundColor: "#FF14a2",
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    scannedData: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  
  export default ShareProfile;
  