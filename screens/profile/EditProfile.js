import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../../components/common/CommonHeader';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import * as Icons from 'react-native-heroicons/outline'
import { API_URL } from '../../api/api';
import { TextInput } from 'react-native';
import { getHeaders } from '../../api/APIHeaders';
import { Picker } from '@react-native-picker/picker';
import CountryPicker from "react-native-country-picker-modal";
import DateTimePicker from "@react-native-community/datetimepicker";


const EditProfile = () => {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const [cities, setCities] = useState([]);
    const [userInfo, setUserInfo] = useState();
    const [city, setCity] = useState();
    const [birth, setBirth] = useState(new Date());
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("US");
    const [show, setShow] = useState(false);



    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
              const headers = await getHeaderWithAuth();
              const response = await fetch(`${API_URL}/my_info/`, {
                headers: headers,
              });
              const data = await response.json();
              console.log(data.date_of_birth); // Log the fetched data
          
              // Update the state with the fetched user info
              setUserInfo(data);
              setBirth(userInfo?.date_of_birth)
            } catch (error) {
                console.error(error);
              }
            };

            console.log('userInfo.date' , userInfo?.date_of_birth)


        async function fetchCities() {
          const response = await fetch(`${API_URL}/cities`);
          const data = await response.json();
          setCities(data);
        }
        fetchCities();
      }, []);

    

    const [formData, setFormData] = useState({
        city_id: 1,
        city_name: '',
        country_name: '',
        date_of_birth: '',
        email: '',
        full_name: '',
        gender: '',
        tel_number: '',
      });


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
    
      const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setBirth(currentDate);
      };
    
      const showDatePicker = () => {
        setShow(true);
      };

      const handleSubmit = () => {
        const phoneNumber = phone.replace(/\s/g, ""); // remove spaces from the phone number
    
        const formDataWithPhone = {
          ...formData,
          tel_number: phoneNumber,
        };
    
        const headers = getHeaders();
        fetch(`${API_URL}/my_info/`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(formDataWithPhone),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle success or error response
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };


    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
      },)})



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
         <CommonHeader headerTilte={t('editProfileHeader')} />
      
      <ScrollView style={{marginBottom:10}}>

        <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Icons.CameraIcon size={30} color={'#fff'} />
        </View>


        <View style={styles.infoContainer}>
        <View style={styles.info}>
            <Text style={styles.infoText}>{t('name')}</Text>
            {/* inputfield */}
            <TextInput
                style={styles.input}
                value={formData.full_name}
                onChangeText={(value) => handleInputChange('full_name', value)}
              />
        </View>
        <View style={styles.info}>
            <Text style={styles.infoText}>{t('eMail')}</Text>
            {/* inputfield */}
            <TextInput
                style={styles.input}
                value={formData.full_name}
                onChangeText={(value) => handleInputChange('full_name', value)}
              />
        </View>
        <View style={styles.info}>
              <Text style={styles.infoText}>{t('mobile')}</Text>
              <View style={styles.countryContainer}>
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
            </View>



        <View style={styles.info}>
            <Text style={styles.infoText}>{t('dob')}</Text>
            {/* date of birth */}
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
            <Icons.CalendarIcon
              onPress={showDatePicker}
              style={{ width: 24, height: 24 }}
              color={"#509ca4"}
            />
          </View>
        </View>


        <View style={styles.info}>
            <Text style={styles.infoText}>{t('gender')}</Text>
            {/* gender */}
            <TextInput
                style={styles.input}
                value={formData.full_name}
                onChangeText={(value) => handleInputChange('full_name', value)}
              />
        </View>
        <View style={styles.info}>
            <Text style={styles.infoText}>{t('city')}</Text>
            {/* inputfield */}
            <Picker
            style={styles.input}
            selectedValue={city}
            onValueChange={(itemValue) => {setCity(itemValue), console.log(city)}}
          >
            <Picker.Item  label={t('selectCity')} value="" />
            {cities?.map((city) => (
              <Picker.Item key={city.id} label={city.name} value={city.id} />
            ))}
          </Picker>

            
        </View>


            
        </View>
        <Text style={styles.btn}>{t('save')}</Text>

        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        top: 30,
        marginBottom:50
      },
      imageContainer: {
        width: 123,
        height: 123,
        borderRadius: 100,
        backgroundColor: "#528DA7",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      },
      infoContainer: {
        alignSelf:'flex-start'
        , paddingHorizontal: 20,
        flexDirection:'column',
        width:'90%'
      }
      ,
      info: {
        flexDirection:'column',

      }
      ,input: {
        // Styles for input field
        backgroundColor:'#fff',
        borderRadius:15
        ,width:'110%',
        height:45,
        fontSize:21,
        padding:5,
        marginVertical:5
      } ,
      btn:{
        marginTop:10,
        width:'90%',
        backgroundColor:'#528DA7',
        borderRadius: 5,
        paddingHorizontal: 125
        , paddingVertical: 15,
        alignSelf:'center',
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'800'
      },
      countryContainer:{
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        width:'88%'
      }
    })


export default EditProfile