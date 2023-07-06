import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import Header from "../../components/auth/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { API_URL } from "../../api/api";
import { useTranslation } from "react-i18next";
import { getHeaders } from "../../api/APIHeaders";
import axios from "axios";
import CustomText from "../../components/common/CustomText";


const ForgotScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const {t} = useTranslation();



  const handleForgotPress = async () => {
    try {
      const headers = await getHeaders();
      const mail = email;
      const url = `${API_URL}/password_reset/?email-tel=${encodeURIComponent(mail)}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });
  
      const data = await response.json();
  
  
      if (response.ok) {
        navigation.navigate('verificationScreen', { email });
      } else {
        console.log('data error', data.error);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  
  
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View>
          <Header />
        </View>
      </SafeAreaView>
      <View style={styles.container}>

        <View style={styles.formContainer}>
        <Image style={{width:200, marginBottom:10}} source={require('../../assets/images/auth/forgot.png')} />
          <View>
            <CustomText bold className='text-xl  ' style={{color:'#509ca4',    fontWeight:'900' }}>{t('forgotPassword')}</CustomText>
            <CustomText bold style={{alignSelf:'center', alignContent:'center'}}>{t('forgotPasswordDesc')}</CustomText>
        </View>
          <TextInput
            style={styles.input}
            placeholder={t('emailOrMob')}
            placeholderTextColor="#b3c3cd"
            value={email}
            onChangeText={setEmail}
          />
          
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleForgotPress}
          >
            <CustomText bold style={styles.buttonText}>{t('send')}</CustomText>
          </TouchableOpacity>
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
    justifyContent: "center",
  },
  formContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    top: 35,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#509ca4",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 0,
    padding: 10,
    marginBottom: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#509ca4",
  },
  loginButton: {
    backgroundColor: "#509ca4",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 100,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  forgot:{
    alignSelf:'flex-end',
  },
  passwordContainer:{
    flexDirection:'row',
    width: "100%",
    height: 50,
    borderRadius: 0,
    marginBottom: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#509ca4",
  },
  passwordInput:{
    paddingLeft:10,
    width:'90%'
  },
  EyeIcon:{
    top:'30%',
    alignSelf:'flex-end'
  }
});

export default ForgotScreen;
