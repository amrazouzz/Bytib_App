import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../../components/auth/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-heroicons/outline";
import { API_URL } from "../../api/api";
import CountryPicker from "react-native-country-picker-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false); // add state for showing password
  const [countryCode, setCountryCode] = useState("US");
  const [cities, setCities] = useState([]);
  const {t} = useTranslation();

  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      const response = await fetch(`${API_URL}/cities`);
      const data = await response.json();
      setCities(data);
    }
    fetchCities();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setBirth(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  const handleSignupPress = async () => {
    navigation.navigate('completeAccount')
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handlePhoneChange = (text) => {
    // only allow numbers
    const formattedText = text.replace(/[^\d]/g, "");

    // group the phone number into groups of 3 digits
    let formattedPhone = "";
    for (let i = 0; i < formattedText.length; i++) {
      if (i % 3 === 0 && i > 0) {
        formattedPhone += " ";
      }
      formattedPhone += formattedText[i];
    }

    setPhone(formattedPhone);
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
          <TextInput
            style={styles.input}
            placeholder={t('fullName')}
            placeholderTextColor="#b3c3cd"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder={t('emailOrMob')}
            placeholderTextColor="#b3c3cd"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder={t('password')}
              placeholderTextColor="#b3c3cd"
              secureTextEntry={!showPassword} // use !showPassword to hide password
              value={password}
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
          <View style={styles.counteryContainer}>
            <CountryPicker
              withCallingCode
              countryCode={countryCode}
              onSelect={async (country) => {
                setCountryCode(country.cca2);
                const response = await fetch(
                  `https://api.teleport.org/api/countries/iso_alpha2:${country.cca2}/cities/`
                );
                const data = await response.json();
                setCities(data._embedded["city:search-results"]);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="000 000 000"
              placeholderTextColor="#b3c3cd"
              keyboardType="numeric"
              value={phone}
              onChangeText={handlePhoneChange}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="Select Birth Date"
              value={birth.toDateString()}
              onFocus={showDatePicker}
              editable={true}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={birth}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <Icon.CalendarIcon
              onPress={showDatePicker}
              style={{ width: 24, height: 24 }}
              color={"#509ca4"}
            />
          </View>
          <Picker
            style={styles.input}
            selectedValue={city}
            onValueChange={(itemValue) => setCity(itemValue)}
          >
            <Picker.Item label={t('selectCity')} value="" />
            {cities?.map((city) => (
              <Picker.Item key={city.id} label={city.name} value={city.name} />
            ))}
          </Picker>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSignupPress}
          >
            <Text style={styles.buttonText}>{t('signup')}</Text>
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
    paddingHorizontal: 95,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
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
  counteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "#509ca4",
    borderRadius: 5,
    padding: 10,
  },
});

export default SignupScreen;
