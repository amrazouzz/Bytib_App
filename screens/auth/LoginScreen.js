import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useLayoutEffect, useState, useTransition } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import { user_login } from "../../api/userApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import CustomText from "../../components/common/CustomText";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // add state for showing password
  const navigation = useNavigation();
  const {t} = useTranslation();

  useEffect(() => {
    AsyncStorage.getItem("AccessToken")
      .then(loggedIn => {
        if (loggedIn) {
          navigation.navigate('home')
        }
      });
  }, []);
  

  const handleLoginPress = async () => {
    user_login({
      email: email,
      password: password,
    }).then((response)=>{
      console.log(response)

  
      if(response.access){
        AsyncStorage.setItem("AccessToken", response.access)
        navigation.navigate("home")
      }
  
    }).catch(err => {
      console.log(err)
    })
  };
  

  const handleForgot = () => {
    navigation.navigate('forgotScreen')
  } 

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
          {/* <Icon.KeyIcon size={150} color={"#509ca4"} /> */}
          <Image style={{width:200, marginBottom:10}} source={require('../../assets/images/auth/login.png')} />
          <TextInput
            style={styles.input}
            placeholder={t('emailOrMob')}
            placeholderTextColor="#b3c3cd"
            value={email}
            onChangeText={t => setEmail(t)}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder={t('password')}
              placeholderTextColor="#b3c3cd"
              secureTextEntry={!showPassword} // use !showPassword to hide password
              value={password}
              onChangeText={t => setPassword(t)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)} // toggle showPassword state
            >
              {showPassword?  <Icon.EyeSlashIcon style={styles.EyeIcon}
              size={20}
              color={"#b3c3cd"}
            />: <Icon.EyeIcon style={styles.EyeIcon}
            size={20}
            color={"#509ca4"} 
          /> }
              
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgot} onPress={handleForgot}>
          <CustomText style={styles.forgot} className="text-sm text-red-500">
            {t('forgotPassword')}
          </CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLoginPress}
          >
            <CustomText bold style={styles.buttonText}>{t('login')}</CustomText>
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
    paddingHorizontal: 105,
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

export default LoginScreen;
