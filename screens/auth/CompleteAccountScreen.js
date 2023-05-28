import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
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
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";

const CompeleteAccountScreen = () => {
    const [gender, setGender] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [disears, setDisears] = useState('')
    const [other, setOther] = useState('')
    const {t} = useTranslation();
    
    const navigation = useNavigation();

    const handleCompletePress = () => {
        navigation.navigate('home')
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
            
        <Picker
            style={styles.input}
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label={t('gender')} value="" />
            
              <Picker.Item key={0} label={t('male')} value={'M'} />
              <Picker.Item key={1} label={t('female')} value={'F'} />
            
          </Picker>

          <TextInput
            style={styles.input}
            placeholder={t('height')}
            placeholderTextColor="#b3c3cd"
            value={height}
            onChangeText={setHeight}
          />
          <TextInput
            style={styles.input}
            placeholder={t('weight')}
            placeholderTextColor="#b3c3cd"
            value={weight}
            onChangeText={setWeight}
          />
          <TextInput
            style={styles.input}
            placeholder={t('diseares')}
            placeholderTextColor="#b3c3cd"
            value={disears}
            onChangeText={setDisears}
          />
          <TextInput
            style={styles.input}
            placeholder={t('other')}
            placeholderTextColor="#b3c3cd"
            value={other}
            onChangeText={setOther}
          />
          
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleCompletePress}
          >
            <Text style={styles.buttonText}>{t('save')}</Text>
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

export default CompeleteAccountScreen;
