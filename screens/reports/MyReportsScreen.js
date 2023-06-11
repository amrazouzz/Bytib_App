import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../components/common/CommonHeader";
import { TextInput } from "react-native-paper";

const MyReportsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF5FA" }}>
      <CommonHeader headerTilte={t("myReportsH")} />
      <ScrollView style={styles.container}>
        
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder={t('fullName')} placeholderTextColor="#C0BDB8" />
        </View>
        
        
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>{t('myReportsHeadline')}</Text>
        </View>

        <View style={styles.reportsContainer}>
          
          <View style={styles.itemContainer}>
            <Image style={styles.icon} source={require('../../assets/images/myReports/medical.png')} />
            <Text style={styles.text} >{ t('medicalR') }</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image style={styles.icon} source={require('../../assets/images/myReports/lab.png')} />
            <Text style={styles.text} >{ t('labR') }</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image style={styles.icon} source={require('../../assets/images/myReports/sonar.png')} />
            <Text style={styles.text} >{ t('sonarR') }</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image style={styles.icon} source={require('../../assets/images/myReports/radio.png')} />
            <Text style={styles.text} >{ t('radioR') }</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image style={styles.icon} source={require('../../assets/images/myReports/drugs.png')} />
            <Text style={styles.text} >{ t('drugsR') }</Text>
          </View>
          
        </View>

        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 35,
    marginHorizontal:30
  },
  searchContainer: {
    borderRadius: 15,
    overflow: 'hidden'
    , marginBottom: 30
  },
  input: {
    backgroundColor: '#fff',
    borderRadius:10
  },
  headline: {
    fontSize: 17,
    color:"#528DA7"
  },
  headlineContainer: {
    marginBottom:50
  },
  reportsContainer: {
    
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:15
  },
  icon: {
    width: 80,
    height:80
  },
  text: {
    marginHorizontal: 25,
    fontSize: 18,
    fontWeight:'600'
  }
});
export default MyReportsScreen;
