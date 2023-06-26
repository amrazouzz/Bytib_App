import { View, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonHeader from '../../../components/common/CommonHeader'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import * as Icons from 'react-native-heroicons/solid'

const LabReports = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [year, setYear] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    // Perform search logic here
  }

  const handleSortOptionChange = (option) => {
    setSortOption(option);
    // Perform sorting logic here
  }
  const handleYearChange = (option) => {
    setYear(option);
    // Perform sorting logic here
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF5FA" }}>
      <CommonHeader headerTilte={t("labReportH")} />
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <AntDesign name="search1" size={24} color="gray" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={t('searchPlaceholder')}
              value={searchText}
              onChangeText={handleSearchTextChange}
            />
          </View>
          <View style={styles.sortContainer}>
            <Picker
              style={styles.sortPicker}
              selectedValue={sortOption}
              onValueChange={handleSortOptionChange}
            >
              <Picker.Item label={t('sortOptions')} value="option1" />
              <Picker.Item label={t('sortOption2')} value="option2" />
              <Picker.Item label={t('sortOption3')} value="option3" />
            </Picker>
                  </View>


              </View>
              <View style={styles.yearContainer}>
                  <View style={styles.sortYearContainer}>
                  
                   <Picker
              style={styles.sortPickerYear}
              selectedValue={setYear}
              onValueChange={handleYearChange}
            >
              <Picker.Item label='2023' value="option1" />
              <Picker.Item label='2022' value="option2" />
              <Picker.Item label='2021' value="option3" />
                  </Picker>
                  
              </View>

              <View style={styles.textContainer}>
                  <Text style={styles.yearText}>{ t('labTestM') }</Text>

              </View>
              </View>

              <TouchableOpacity onPress={()=> navigation.navigate('myReport')}>
              <View style={styles.itemContainer}>
              
              <View style={styles.itemH}>
              <View style={styles.itemIconContainer}>
              <Image source={require('../../../assets/images/myReports/lab/Icon.png')} style={styles.itemIcon} />
              
              </View>                  
              <View style={styles.itemTextContainer}>
              <Text style={styles.itemTextH} >PCR Test</Text>
              <Text style={styles.itemTextD} >01.04.2023 at 11:00</Text>
              </View>
              
              </View>
              
              <View style={styles.itemOptionsContainer}>
              <Image source={require('../../../assets/images/myReports/lab/dots.png')} style={styles.itemOptions} />
              </View>
                  
              
              </View>
              </TouchableOpacity>
              
              
              
              
              
              </ScrollView>
              </SafeAreaView>
              )
            }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
      paddingHorizontal: 10,
    paddingVertical:10
  },
  searchIcon: {
      marginRight: 5,
      fontSize:18
  },
  searchInput: {
      flex: 1,
      fontSize:16
  },
  sortContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sortPicker: {
    height: 40,
    width: 150,
  },
  sortYearContainer: {
    backgroundColor: 'white',
      justifyContent: 'center',
      height: 50,
  },
  sortPickerYear: {
    height: 40,
      width: 120,
    },
    yearContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        bottom: 5,
        marginBottom:5
        
    },
    textContainer: {
        justifyContent:'center'
    }
    ,
    yearText: {
        paddingHorizontal: 10,
        fontSize:15
    },
    itemContainer: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:15
    },
    itemH: {
        flexDirection: 'row',
        alignItems:'center'
    },
    itemTextContainer: {
        paddingHorizontal:10
    },

    itemIconContainer: {
        width: 30,
        height:50,
    },
    itemIcon: {
        width: '100%',
        height: '100%',
        resizeMode:'contain'
    },
    itemOptionsContainer: {
        height: 20,
        width:20
    },
    itemOptions: {
        width: '100%',
        height: '100%',
        resizeMode:'contain'
    },
    itemTextH: {
        fontSize:17
    }
})

export default LabReports;
