import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-heroicons/outline";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";
import CommonHeader from "../../components/common/CommonHeader";
import SelectMultiple from "react-native-select-multiple";
import { ScrollView } from "react-native";

const AddMember = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState(new Date());
    const navigation = useNavigation();
    const [gender, setGender] = useState('')
    const [disears, setDisears] = useState('')
    const [other, setOther] = useState('')
    const [relation, setRelation] = useState('');
    const [chronicDiseases, setChronicDiseases] = useState([]);

  const {t} = useTranslation();

    const [show, setShow] = useState(false);
    

    const chronicDiseaseOptions = [
        { value: "disease1", label: "Disease 1" },
        { value: "disease2", label: "Disease 2" },
        { value: "disease3", label: "Disease 3" },
        { value: "disease4", label: "Disease 4" },
        // Add more disease options as needed
      ];


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setBirth(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
    };
    
  const handleAddPress = async () => {
   
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
                  <CommonHeader headerTilte={t('addMember')} />
        </View>
          </SafeAreaView>
          <ScrollView>
      <View style={styles.container}>
              <View style={styles.formContainer}>
              <Text style={styles.label}>{t('fullName')}</Text>

          <TextInput
            style={styles.input}
            placeholder={t('fullName')}
            placeholderTextColor="#b3c3cd"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>{t('birthD')}</Text>

          <View style={{ flexDirection: "row", alignItems: "center", width:'100%' }}>
            
                      <TextInput
              style={styles.input}
              placeholder={t('birthD')}
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
                  <Text style={styles.label}>{t('gender')}</Text>

                  <View style={{width:'100%', overflow:'hidden', borderRadius:15, height:50, marginBottom:20}}>
                  <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
                      >
                          
        <Picker.Item label={t('gender')} value="" />
        
          <Picker.Item key={0} label={t('male')} value={'M'} />
          <Picker.Item key={1} label={t('female')} value={'F'} />
        
                      </Picker>
                     
                  
                  </View>

                  <Text style={styles.label}>{t('relationship')}</Text>

                  <View style={{width:'100%', overflow:'hidden', borderRadius:15, height:50, marginBottom:20}}>
                  
                      
                  <Picker
                  style={styles.input}
                  selectedValue={relation}
                  onValueChange={(itemValue) => setRelation(itemValue)}
                >
                  <Picker.Item label={t('relationship')} value="" />
                  
                    <Picker.Item label='relation' value='relation' />
      
                </Picker>
                  </View>
                  <Text style={styles.label}>{t('chronicDiseases')}</Text>
                  <SelectMultiple
                    items={chronicDiseaseOptions}
                    selectedItems={chronicDiseases}
                      onSelectionsChange={setChronicDiseases}
                      style={{ backgroundColor: "transparent", borderWidth:0, marginBottom: 10, width:'100%' }}
                      rowStyle={{ backgroundColor: "transparent", padding: 10, borderBottomWidth: 0 }}
                      labelStyle={{ color: "#000", fontSize: 16 }}
                      numColumns={2}
                  />



          <TextInput
            style={styles.other}
            placeholder={t('other')}
            placeholderTextColor="#000"
            value={other}
            onChangeText={setOther}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleAddPress}
          >
            <Text style={styles.buttonText}>{t('addNewMember')}</Text>
          </TouchableOpacity>
        </View>
              </View>
              </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#eaf5fa",
    },
    container: {
      flex: 1,
        alignItems: "center",
    },
    formContainer: {
      width: "90%",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      fontSize: 16,
        marginBottom: 5,
      alignSelf:'baseline'
    },
    input: {
      width: "100%",
      height: 50,
      borderRadius: 15,
      padding: 10,
      marginBottom: 20,
      backgroundColor: "#fff",
    },
    loginButton: {
      backgroundColor: "#509ca4",
      borderRadius: 5,
      paddingVertical: 16,
      paddingHorizontal: "30%",
      marginTop: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
    },
    other: {
        borderBottomWidth: 0.5,
        width: '100%',
        height: 50,
        fontSize:16
    }
  });
  

export default AddMember;
