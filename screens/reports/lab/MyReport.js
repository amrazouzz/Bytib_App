import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonHeader from '../../../components/common/CommonHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const MyReport = () => {
    const navigation = useNavigation();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF5FA" }}>
    <CommonHeader headerTilte={t("myReport")} />
    <ScrollView style={styles.container}>
      
              <View style={styles.wrapper}>
                  <View style={styles.head} >
                      <View style={styles.headIconContainer}>
                      <Image source={require('../../../assets/images/myReports/lab/info.png')} style={styles.headIcon} />
                      </View>
                      <Text style={styles.headTxt}>{t('basicInfo')}</Text>
                  </View>

                  <View style={styles.body}>
                      
                  <View style={styles.item}>
                  <Text style={styles.label}>{ t('patientName') }</Text>
                  <Text style={styles.info}>Ahmed Saeed</Text>
                  </View>
                  <View style={styles.item}>
                  <Text style={styles.label}>{ t('profileNo') }</Text>
                  <Text style={styles.info}>150</Text>
                  </View>
                  <View style={styles.item}>
                  <Text style={styles.label}>{ t('gender') }</Text>
                  <Text style={styles.info}>Male</Text>
                  </View>
                  <View style={styles.item}>
                  <Text style={styles.label}>{ t('age') }</Text>
                  <Text style={styles.info}>29</Text>
                  </View>
                  <View style={styles.item}>
                  <Text style={styles.label}>{ t('drName') }</Text>
                  <Text style={styles.info}>Dr. Ali Samahi</Text>
                  </View>
                  <View style={styles.item}>
                  <Text style={styles.label}>{ t('reportDate') }</Text>
                  <Text style={styles.info}>Dec 24, 2019</Text>
                  </View>

                  </View>
              
              </View>
              

              <View style={styles.wrapper}>
              <View style={styles.head} >
                  <View style={styles.headIconContainer}>
                  <Image source={require('../../../assets/images/myReports/lab/radio.png')} style={styles.headIcon} />
                  </View>
                  <Text style={styles.headTxt}>{t('radioReport')}</Text>
              </View>

              <View style={styles.body}>
                  
              <View style={styles.item}>
              <Text style={styles.label}>{ t('title') }</Text>
              <Text style={styles.info}>US. UPPER & LOWER ABDOMEN</Text>
              </View>
              <View style={styles.item}>
              <Text style={styles.label}>{ t('clinicalData') }</Text>
              <Text style={styles.info}>Clinical Data:
              Cervical disc disorders. FINDINGS:
              - straightening of cervical spine.
              - Relative narrowing of C2-C3 disc space.
              - Marginal osteophytes seen at lower border of C5.
              - No bony cervical ribs seen.- Normal prevertebral soft tissue structures.
              </Text>
              </View>
              <View style={styles.item}>
              <Text style={styles.label}>{ t('impression') }</Text>
              <Text style={styles.info}> Left ovarian complicated (hemorrhagic) cyst as described above for clinical correlation and follow up</Text>
              </View>
                  </View>
          
              </View>
              
              <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Text style={styles.btn} >{t('ok') }</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.downloadBtn} >{t('downloadReport') }</Text>
          </TouchableOpacity>
              
    </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    wrapper: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 8},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:5
    },
    head: {
        flexDirection: 'row',
        marginBottom: 5
        , borderBottomWidth: 0.2,
        paddingBottom: 5,
        alignItems: 'center'
        
        

    },
    headIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    headIconContainer: {
        width: 40,
        height: 40,
    },
    headTxt: {
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal:20
    },
    body: {
        marginVertical:10
    },
    item: {
        marginBottom:5
    },
    label: {
        fontSize: 16,
        marginBottom:3
    },
    info: {
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 0.2,
        paddingVertical: 15,
        paddingHorizontal:15
    },
    btn: {
        marginBottom: 10,
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#528DA7',
        paddingHorizontal: '44%',
        paddingVertical: 15,
        color: '#fff',
        borderRadius: 5,
        fontSize: 18,
        fontWeight:'600'
    },
    downloadBtn: {
        marginBottom: 100,
        alignSelf: 'center',
        backgroundColor: '#528DA7',
        paddingHorizontal: '20%',
        paddingVertical: 15,
        color: '#fff',
        borderRadius: 5,
        fontSize: 18,
        fontWeight:'600'
    }

})

export default MyReport