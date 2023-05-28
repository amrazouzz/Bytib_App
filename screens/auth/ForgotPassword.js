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
import * as Icon from "react-native-heroicons/outline";
import { API_URL } from "../../api/api";
import { useTranslation } from "react-i18next";

const ForgotScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const {t} = useTranslation();

  const handleForgotPress = async () => {
    navigation.navigate('verificationScreen')
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
            <Text className='text-xl font-bold ' style={{color:'#509ca4',    fontWeight:'900' }}>{t('forgotPassword')}</Text>
            <Text className='font-bold' style={{alignSelf:'center', alignContent:'center'}}>{t('forgotPasswordDesc')}</Text>
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
            <Text style={styles.buttonText}>{t('send')}</Text>
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
