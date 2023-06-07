import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Header from "../../components/auth/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-heroicons/outline";
import { API_URL } from "../../api/api";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { getHeaders } from "../../api/APIHeaders";


const VerificationScreen = ({ route }) => {
  const [verification, setVerification] = useState("");
  const [timer, setTimer] = useState(60);
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [email, setEmail] = useState("");




  const handleForgotPress = async () => {
try {
  const headers = await getHeaders();
  const response = await fetch(`${API_URL}/password_reset/`,{
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      'email-tel':email,
      'code': verification
    })
  } );

  const data = await response.json();


  if (response.ok) {
    // Appointment booked successfully
    navigation.navigate('passwordReset', { email: email });
  } else {
    // Handle error case
    const errorResponse = await response.json();
    console.log(errorResponse);
    
  }

} catch (error) {
  console.log('catch error: ', error)
}

  };
  
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);




  useEffect(() => {
    if (route.params && route.params.email) {
      setEmail(route.params.email); 
    }
  }, [route.params]);




  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  const handleResend = () => {
    if (timer === 0) {
      // logic to resend verification code
      setTimer(60);
    }
  };

  const handleResendPress = () => {
    
  }

  const handleVerificationChange = (value, index) => {
    const newVerification = [...verification];
    newVerification[index] = value;
    setVerification(newVerification.join(""));
  };
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View>
          <Header />
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View>
            <Text className="text-xl font-bold" style={{ color: "#509ca4",    fontWeight:'900' }}>
              {t('verificaitonTitle')}
            </Text>
            <Text
              className="font-bold"
              style={{ alignSelf: "center", alignContent: "center" }}
            >
              {t('verificationDesc')}
            </Text>
          </View>
           <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={verification[0]}
              onChangeText={(value) => handleVerificationChange(value, 0)}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={verification[1]}
              onChangeText={(value) => handleVerificationChange(value, 1)}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={verification[2]}
              onChangeText={(value) => handleVerificationChange(value, 2)}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={verification[3]}
              onChangeText={(value) => handleVerificationChange(value, 3)}
            />
          </View>
          {timer === 0 ? (
            <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
              <Text style={{ color: "#509ca4" }}>{t('resend')}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.timerContainer}>
              <Text style={{ color: "#b3c3cd" }}>{t('resendOn')}</Text>
              <Text style={{ fontWeight: "bold" }}>{timer}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.checkButton} onPress={handleResendPress}>
            <Text style={{ color: "#fff" }}>{t('resend')}</Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleForgotPress}
          >
            <Text style={styles.buttonText}>{t('check')}</Text>
          </TouchableOpacity>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 20,
  },
  input: {
    width: "22%",
    height: 50,
    borderRadius: 0,
    padding: 10,
    marginBottom: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#509ca4",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#509ca4",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 95,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",

  },
  forgot: {
    alignSelf: "flex-end",
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 0,
    marginBottom: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#509ca4",
  },
  passwordInput: {
    paddingLeft: 10,
    width: "90%",
  },
  EyeIcon: {
    top: "30%",
    alignSelf: "flex-end",
  },
});

export default VerificationScreen;
