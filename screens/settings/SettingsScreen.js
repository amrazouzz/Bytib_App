import { View, Text, I18nManager } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../components/common/CommonHeader";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import * as Icon from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import { useState } from "react";
import ChangePasswordComponent from "../../components/settings/ChangePasswordComponent";
import { useEffect } from "react";
import { getHeaderWithAuth } from "../../api/APIHeaders";
import { API_URL } from "../../api/api";
import ChangeLang from "../../components/settings/ChangeLang";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [isChangePasswordVisible, setChangePasswordVisible] = useState(false);
  const [isLangVisible, setLangVisible ] = useState(false);

  const [userInfo, setUserInfo] = useState(null);
  const [email, setEmail] = useState('')

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const headers = await getHeaderWithAuth();
        const response = await fetch(`${API_URL}/my_info/`, {
          headers: headers,
        });
        const data = await response.json();
        console.log(data); // Log the fetched data
    
        // Update the state with the fetched user info
        setUserInfo(data);
        setEmail(userInfo.email)
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchUserInfo();
  }, []);


  const handleOpenChangePassword = () => {
    setChangePasswordVisible(true);
  };

  const handleCloseChangePassword = () => {
    setChangePasswordVisible(false);
  };
  const handleOpenLang = () => {
    setLangVisible(true);
  };

  const handleCloseLang= () => {
    setLangVisible(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  








  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF5FA" }}>
      <CommonHeader headerTilte={t("settingsH")} />
      <ScrollView style={styles.container}>


        <TouchableOpacity onPress={()=>navigation.navigate('editMyProfile')} style={styles.settingContainer}>
          <View  style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Icon.UserIcon style={styles.icon} />
            </View>
            <Text style={styles.text}>{t('editProfile')}</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={handleOpenChangePassword} style={styles.settingContainer}> 
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Icon.LockClosedIcon style={styles.icon} />
            </View>
            <Text style={styles.text}>{t('changePassword')}</Text>
          </View>
        </TouchableOpacity>


        <View style={styles.settingContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Icon.ChatBubbleBottomCenterTextIcon style={styles.icon} />
            </View>
            <Text style={styles.text}>{t('allowVoice')}</Text>
          </View>
        </View>


        <View style={styles.settingContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Icon.ChatBubbleBottomCenterTextIcon style={styles.icon} />
            </View>
            <Text style={styles.text}>{t('allowVideo')}</Text>
          </View>
        </View>


        <View style={styles.settingContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Icon.ChatBubbleBottomCenterTextIcon style={styles.icon} />
            </View>
            <Text style={styles.text}>{t('allowCall')}</Text>
          </View>
        </View>

        <View style={styles.settingContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Icon.BellSnoozeIcon style={styles.icon} />
            </View>
            <Text style={styles.text}>{t('notifications')}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleOpenLang} style={styles.settingContainer}> 
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Icon.LanguageIcon style={styles.icon} />
            </View>
            <Text style={styles.text}>{t('language')}</Text>
          </View>
        </TouchableOpacity>






        <Modal
        visible={isChangePasswordVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseChangePassword}
      >
        <View style={styles.modalContainer}>

          <ChangePasswordComponent email={email} onClose={handleCloseChangePassword} />
        </View>
      </Modal>

      <Modal
        visible={isLangVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseLang}
      >
        <View style={styles.modalContainer}>

          <ChangeLang onClose={handleCloseLang} />
        </View>
      </Modal>



      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  settingContainer: {
    width: "100%",
    backgroundColor: "#fff",
    height: 80,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderBottomWidth: 0.5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#528DA7",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text:{
    paddingHorizontal: 15,
    fontSize:18
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
});

export default SettingsScreen;
