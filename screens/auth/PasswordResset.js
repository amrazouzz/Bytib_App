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

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword ] = useState("");
  const navigation = useNavigation();

  const handleConfirmPress = async () => {
    navigation.navigate('successfulPassword')
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
            <Text className='text-xl font-bold' style={{color:'#509ca4',    fontWeight:'900' }}>PASSWORD RESET</Text>
            <Text className='font-bold' style={{alignSelf:'center', alignContent:'center'}}>Discription</Text>
        </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#b3c3cd"
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Re Password"
            placeholderTextColor="#b3c3cd"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleConfirmPress}
          >
            <Text style={styles.buttonText}>CONFIRM</Text>
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

export default PasswordReset;
