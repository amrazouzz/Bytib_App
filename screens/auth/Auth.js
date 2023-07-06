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
import CustomText from "../../components/common/CustomText";

const Auth = () => {
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


  useEffect(() => {
    AsyncStorage.getItem("AccessToken")
      .then(loggedIn => {
        if (loggedIn) {
          navigation.navigate('home')
        }
      });
  }, []);

  const handleLoginPress = () => {
    navigation.navigate('loginScreen')
  };

  const handleSignUpPress = () => {
    navigation.navigate('signupScreen')
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/auth/auth_bg.png")}
        style={styles.image}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Header />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={handleLoginPress}>
              <CustomText bold style={styles.buttonText}>{t('login')}</CustomText>
            </TouchableOpacity>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={handleSignUpPress}>
                <CustomText bold style={styles.buttonText}>{t('signup')}</CustomText>
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

  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    alignSelf:'center'
  },
});

export default Auth;
