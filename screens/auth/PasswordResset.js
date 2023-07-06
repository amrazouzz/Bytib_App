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
import { useEffect } from "react";
import { getHeaders } from "../../api/APIHeaders";
import CustomText from "../../components/common/CustomText";

const PasswordReset = ({ route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (route.params && route.params.email) {
      setEmail(route.params.email);
    }

    console.log("email set password reset screen: ", email);
  }, [route.params]);

  const handleConfirmPress = async () => {
    if (password !== confirmPassword) {
      setErr(t('passwordMatch'));
      return;
    } else {
      setCheckedPassword(password);
    }


    if (password.length < 6 || confirmPassword.length < 6) {
      setErr(t('passwordLess'));
      return;
    }

    try {
      const headers = await getHeaders();
      const response = await fetch(`${API_URL}/password_reset/`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          "email-tel": email,
          "new_password": checkedPassword,
        }),
      });

      const data = await response.json();

      console.log('data: ', data)
      console.log('status: ', response.status)
      if(data.error_msg){
        setErr(data.error_msg)
      }

      if (response.ok) {
        navigation.navigate("successfulPassword");
      } else {
        const errorResponse = await response.json();
        console.log(errorResponse);
      }
    } catch (error) {
      console.log("catch error: ", error);
      
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
        <View style={styles.formContainer} className="mb-4">
          <View>
            <Text
              className="text-xl font-bold"
              style={{ color: "#509ca4", fontWeight: "900" }}
            >
              {t("passwordResetTitle")}
            </Text>
            <Text
              className="font-bold"
              style={{ alignSelf: "center", alignContent: "center" }}
            >
              {t("passwordResetDesc")}
            </Text>
          </View>
          <View style={styles.passwordContainer}>

          <TextInput
            style={styles.input}
            placeholder={t("password")}
            placeholderTextColor="#b3c3cd"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)} // toggle showPassword state
          >
            {showPassword ? (
              <Icon.EyeSlashIcon
                style={styles.EyeIcon}
                size={20}
                color={"#b3c3cd"}
              />
            ) : (
              <Icon.EyeIcon
                style={styles.EyeIcon}
                size={20}
                color={"#509ca4"}
              />
            )}
          </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder={t("rePassword")}
            placeholderTextColor="#b3c3cd"
            value={confirmPassword}
            secureTextEntry={!showPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)} // toggle showPassword state
          >
            {showPassword ? (
              <Icon.EyeSlashIcon
                style={styles.EyeIcon}
                size={20}
                color={"#b3c3cd"}
              />
            ) : (
              <Icon.EyeIcon
                style={styles.EyeIcon}
                size={20}
                color={"#509ca4"}
              />
            )}
          </TouchableOpacity>
          </View>

          <Text style={{ color: "#509ca4", fontSize: 16 }}>{err}</Text>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleConfirmPress}
          >
            <CustomText bold style={styles.buttonText}>{t("confirm")}</CustomText>
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
    paddingHorizontal: 90,
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
  EyeIcon:{
    top:'30%',
    alignSelf:'flex-end'
  }
});

export default PasswordReset;
