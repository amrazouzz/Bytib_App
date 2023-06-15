import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from 'expo-document-picker';
import { API_URL } from "../../api/api";
import { useTranslation } from "react-i18next";
import { getHeaderWithAuth, getHeaders } from "../../api/APIHeaders";
import CommonHeader from "../../components/common/CommonHeader";

const FamilyMemberScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [hasMembers, setHasMembers] = useState(true)



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View>
          <CommonHeader headerTilte={t('sbFamily')} />
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {hasMembers ? <View style={styles.familyContainer}>
          
            <View style={styles.memberItem} >
              <Text style={styles.relationTxt}>SON</Text>
              <View style={styles.item}>
                <Text style={styles.name}>Ahmed Ahmed</Text>
                <View style={styles.icons}>
                  
                  <TouchableOpacity onPress={()=>navigation.navigate('editMember')}>
                  <View style={styles.iconContainer} >
                  <Image source={require('../../assets/images/family/edit.png')} style={styles.icon} />
                  </View>
                  </TouchableOpacity>
                  

                  <TouchableOpacity onPress={()=> navigation.navigate('shareProfile')}>
                  <View style={styles.iconContainer} >
                  <Image source={require('../../assets/images/family/share.png')} style={styles.icon} />
                  </View>
                  </TouchableOpacity>
                </View>
                
              </View>
            </View>
            
            
          
          
          </View> : 
            <View style={{width:'100%'}}>
            <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/family/family.png')}
            />
                  </View>
                  
                  <Text style={styles.text}>{ t('noMembers') }</Text>
                 
            </View>
        }

          <TouchableOpacity style={styles.addBtn} onPress={()=> navigation.navigate('addFamilyMember')}>
            <Text style={styles.buttonText}>{t('addMember')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.existingBtn} onPress={()=> navigation.navigate('connectExisting')}>
            <Text style={styles.buttonText}>{t('connectExisting')}</Text>
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
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  formContainer: {
    width: "95%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    top: 35,
  },
  existingBtn: {
    backgroundColor: "#509ca4",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: '21%',
    marginTop: 10,
  },
  addBtn: {
    backgroundColor: "#509ca4",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: '30%',
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
      textAlign: "center",
    fontWeight:"600"
    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight:"600"

  },
  familyContainer: {
    width: '90%',
  },
  memberItem: {
    marginBottom:20
  },
  item: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  icons: {
    flexDirection:'row'
  },
  iconContainer: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode:'contain'
  },
  name: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: '12%',
    textAlignVertical:'center'
  },
  relationTxt: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 5,
    fontWeight: '500',
    color:'#528DA7'
  }
});

export default FamilyMemberScreen;
