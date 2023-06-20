import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useLayoutEffect } from 'react';
import CommonHeader from '../../components/common/CommonHeader';

const MyOrdersScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(t('availableOrder'));



  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleTextPress = (text) => {
    setSelectedText(text);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EAF5FA' }}>
      <CommonHeader headerTilte={t('myOrder')} />

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerC}>
            <View style={styles.headerItem}>
              <Image
                source={require('../../assets/images/myOrders/bell.png')}
                style={styles.headerIcon}
              />
              <Text style={styles.headerText}> {t('recievedBy')} </Text>
            </View>

            <View style={styles.headerItem}>
              <Image
                source={require('../../assets/images/myOrders/check.png')}
                style={styles.headerIcon}
              />
              <Text style={styles.headerText}> {t('available')} </Text>
            </View>
          </View>

          <View style={styles.headerC}>
            <View style={styles.headerItem}>
              <Image
                source={require('../../assets/images/myOrders/block.png')}
                style={styles.headerIcon}
              />
              <Text style={styles.headerText}> {t('notAvailable')} </Text>
            </View>

            <View style={styles.headerItem}>
              <Image
                source={require('../../assets/images/myOrders/route.png')}
                style={styles.headerIcon}
              />
              <Text style={styles.headerText}> {t('alternative')} </Text>
            </View>
          </View>
              </View>
              


              
              
              
        <View style={styles.orderContainer}>
          <View style={styles.orderH}>
            <View style={styles.imageContainer}></View>
                      <View style={styles.textContainer}>
                      <Text style={styles.orderHeaderTH}>order nimber</Text>
                      <Text style={styles.orderHeaderTP}>medicine name</Text>
                      </View>

                      {!isOpen ? (
                        <TouchableOpacity onPress={handleOpen}>
                          <Image
                            source={require('../../assets/images/myOrders/btn.png')}
                            style={styles.btn}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={handleOpen}>
                          <Image
                            source={require('../../assets/images/myOrders/btnD.png')}
                            style={styles.btn}
                          />
                        </TouchableOpacity>
                      )}

          </View>

                  <View style={styles.orderMid}>
                      <View style={styles.midTextC}>

                          
                          <Text style={styles.midTextD}>29 Aug 2022</Text>
  
                          <Text style={styles.midTextT}>09:00 - 10:00 AM</Text>

                      </View>
                      <View style={styles.midbtry}>
                          <Image style={styles.midImg} source={require('../../assets/images/myOrders/btry.png')} />
                          <Text style={styles.midNum}>5</Text>
                      </View>
                  
                  </View>

          {!isOpen ? (
            <View style={styles.orderF}>
            <View style={styles.midbtry}>
            <Image source={require('../../assets/images/myOrders/bell.png')} style={styles.midImg} />
              <Text style={styles.midNum}>5</Text>
            </View>

            <View style={styles.midbtry}>
            <Image source={require('../../assets/images/myOrders/route.png')} style={styles.midImg} />
              <Text style={styles.midNum}>5</Text>
            </View>

            <View style={styles.midbtry}>
            <Image source={require('../../assets/images/myOrders/check.png')} style={styles.midImg} />
              <Text style={styles.midNum}>5</Text>
            </View>

            <View style={styles.midbtry}>
            <Image source={require('../../assets/images/myOrders/block.png')} style={styles.midImg} />
              <Text style={styles.midNum}>5</Text>
            </View>
        
        </View>
          ) : (
              <View style={styles.footerB} >
              <View style={styles.footerHeader}>
              <TouchableOpacity onPress={() => handleTextPress(t('availableOrder'))}>
                <Text
                  style={[
                    styles.footerHeaderText,
                    selectedText === t('availableOrder') && styles.selectedText,
                  ]}
                >
                  {t('availableOrder')}
                </Text>
              </TouchableOpacity>
        
              <TouchableOpacity onPress={() => handleTextPress(t('unavailable'))}>
                <Text
                  style={[
                    styles.footerHeaderText,
                    selectedText === t('unavailable') && styles.selectedText,
                  ]}
                >
                  {t('unavailable')}
                </Text>
              </TouchableOpacity>
        
              <TouchableOpacity onPress={() => handleTextPress(t('substituteDates'))}>
                <Text
                  style={[
                    styles.footerHeaderText,
                    selectedText === t('substituteDates') && styles.selectedText,
                  ]}
                >
                  {t('substituteDates')}
                </Text>
              </TouchableOpacity>
            </View>
                
                <View style={styles.footerBody}>
                  <View style={styles.footerBodyItem}>
                  <View style={styles.footerBodyProfile}>
                  <View style={styles.footerImageC}></View>
                      <View style={styles.footerBodyText}>
                      <Text style={styles.footerBodyHT}>Pharmacy Name</Text>
                      <Text style={styles.footerBodyHb}>medicament name</Text>
                      </View>
                  </View>
                  <View style={styles.footerBodyTime}>
                  
                  <Text style={styles.footerBodyDistance}>5km</Text>
                    <Text style={styles.footerBodyDate}>1/1/2020 at 12:52 pm</Text>
                  </View>
                  
                  </View>

                </View>
                
                <View style={styles.footerFooter}></View>
                <Text style={styles.footerBtn}>{ t('cancelOrder')}</Text>
                <Text style={styles.footerBtn2}>{ t('expandExpansion')}</Text>
                <Text style={styles.footerBtn3}>{ t('recievedOrder')}</Text>
              
              </View>
              
              
)}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
      alignSelf: 'center',
    marginBottom: 15
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 25,
    height: 40,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 15,
    paddingHorizontal: 5,
    },
    orderContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        borderRadius: 15,
        padding:15
    },
    orderH: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:5
    },
    imageContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#E0EFED',
        borderRadius: 10,
        overflow:'hidden'
    },
    btn: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
    },
    textContainer: {
        marginRight:120
    },
    orderHeaderTH: {
        fontSize: 18,
        marginBottom:5
    },
    orderHeaderTP: {
        fontSize:15
    },
    orderMid: {
        backgroundColor: '#F8FBFB',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding:10
    },
    midTextC: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'80%'
    },
    midTextD: {
        fontSize: 15,
        marginHorizontal:5
    },
    midTextT: {
        fontSize: 15,
    },
    midbtry: {
        flexDirection: 'row',
        alignItems:'center'
    },
    midImg: {
        resizeMode: 'contain',
        width: 20,
        height: 25,
        marginHorizontal:5
    },
    midNum: {
        fontSize: 15,
        marginHorizontal:2
    },
    orderF: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        padding:5
  },
  footerB: {
    marginVertical:10
  },
  footerHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor:'#528DA7'
  , marginBottom: 10
  
  },
  footerHeaderText: {
    color: '#528DA7',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  footerHeaderT: {
    color: '#528DA7',
  },
  selectedText: {
    backgroundColor: '#528DA7',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15
  },

  footerBody: {},
  footerBodyItem: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    marginBottom: 10,
    paddingBottom:10
  },
  footerImageC: {
    backgroundColor: '#528DA7',
    width: 50,
    height: 50,
    borderRadius:25
  },
  footerBodyProfile: {
    flexDirection: 'row',
    alignItems:'center'
  },
  footerBodyText: {
    paddingHorizontal:10
  },
  footerBodyHT: {
    fontSize: 17,
    color: '#528DA7',
    marginBottom:3
  },
  footerBodyHb: {},
  footerBodyTime: {
    alignSelf:'center'
  },
  footerBodyDistance: {
    color: '#3BAEAD',
    marginBottom: 5
  },
  footerBodyDate: {
    fontSize: 12,
    color:'#3A3939'
  },
  footerFooter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBtn: {
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: '35%',
    marginBottom: 15,
    backgroundColor: '#528DA7',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    borderRadius:5
  },
  footerBtn2: {
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: '30%',
    marginBottom: 15,
    backgroundColor: '#528DA7',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    borderRadius:5
  },
  footerBtn3: {
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: '28%',
    marginBottom: 15,
    backgroundColor: '#528DA7',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    borderRadius:5
  }




});

export default MyOrdersScreen;
