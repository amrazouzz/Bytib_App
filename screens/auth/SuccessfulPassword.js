import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/auth/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

const SuccessfulPassword = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


 
  const handleLoginPress = () => {
    navigation.navigate('loginScreen')
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/auth/successful.png")}
        style={styles.image}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Header />
          <View style={styles.buttonContainer}>
              <Text style={styles.Text} >{t('resetSuccessTitle')}</Text>
              <Text style={styles.Discription} >{t('resetSuccessDesc')}</Text>

            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>{t('login')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "column",

  },
  button: {
    backgroundColor: "#509ca4",
    borderRadius: 5,
    paddingVertical: 15,
    margin:5,
    paddingHorizontal: 20,
    textAlign:'center',
    marginBottom:60

  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf:'center'
  },
  Text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "900",
    alignSelf:'center',
    marginBottom:5
  },
  Discription: {
    color: "#000",
    fontSize: 16,
    fontWeight: "100",
    alignSelf:'center',
    textAlign:"center",
    marginBottom:5,
    paddingHorizontal:50,
}});

export default SuccessfulPassword;
