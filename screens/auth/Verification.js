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

const VerificationScreen = () => {
  const [verification, setVerification] = useState("");
  const [timer, setTimer] = useState(60);
  const navigation = useNavigation();

  const handleForgotPress = async () => {
    navigation.navigate("passwordReset");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
              VERIFICATION
            </Text>
            <Text
              className="font-bold"
              style={{ alignSelf: "center", alignContent: "center" }}
            >
              Discription
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
              <Text style={{ color: "#509ca4" }}>RESEND</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.timerContainer}>
              <Text style={{ color: "#b3c3cd" }}>Resend on</Text>
              <Text style={{ fontWeight: "bold" }}>{timer}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.checkButton} onPress={handleResendPress}>
            <Text style={{ color: "#fff" }}>Resend</Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleForgotPress}
          >
            <Text style={styles.buttonText}>CHECK</Text>
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
