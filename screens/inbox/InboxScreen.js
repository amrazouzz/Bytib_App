import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../components/common/CommonHeader";
import * as Icon from 'react-native-heroicons/outline'

const InboxScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF5FA" }}>
      <CommonHeader headerTilte={t("inboxH")} />
          <ScrollView style={styles.container}>
              
              
              <View style={styles.itemContainer}>
                  <Icon.DocumentTextIcon style={styles.icon} />
                  <View style={styles.textContainer}>
                  <Text style={styles.text}> {t("fromDr")} Ahmed </Text>
                  <Text style={styles.text}> 2/2/2023 </Text>
                  <Text style={styles.text}> 2:20 am </Text>
                  </View>
              <Icon.DocumentArrowDownIcon style={styles.downloadIcon} />
              </View>
              
              <View style={styles.itemContainer}>
                  <Icon.DocumentTextIcon style={styles.icon} />
                  <View style={styles.textContainer}>
                  <Text style={styles.text}> {t("fromDr")} Ahmed </Text>
                  <Text style={styles.text}> 2/2/2023 </Text>
                  <Text style={styles.text}> 2:20 am </Text>
                  </View>
              <Icon.DocumentArrowDownIcon style={styles.downloadIcon} />
              </View>
              
              <View style={styles.itemContainer}>
                  <Icon.DocumentTextIcon style={styles.icon} />
                  <View style={styles.textContainer}>
                  <Text style={styles.text}> {t("fromDr")} Ahmed </Text>
                  <Text style={styles.text}> 2/2/2023 </Text>
                  <Text style={styles.text}> 2:20 am </Text>
                  </View>
              <Icon.DocumentArrowDownIcon style={styles.downloadIcon} />
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
      marginBottom: 15,
      justifyContent:'space-between'
  },
  icon: {
    width: 40,
      height: 40,
      color:'#528DA7'
  },
  text: {
    marginHorizontal: 5,
    fontSize: 14,
    fontWeight:'300'
    
    },
    downloadIcon: {
        width: 40,
        height: 40,
        color:'#31EC0D'
    },
    textContainer: {
        flexDirection: 'row',

    }
});
export default InboxScreen;
