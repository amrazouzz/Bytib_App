import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useLayoutEffect } from 'react';
import CommonHeader from '../../components/common/CommonHeader';

const MyOrdersScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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

            <Image source={require('../../assets/images/myOrders/btn.png')} style={styles.btn} />
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
        marginBottom:15
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
    }


});

export default MyOrdersScreen;
