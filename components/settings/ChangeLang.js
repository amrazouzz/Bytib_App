import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, I18nManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';

const ChangeLang = ({ onClose }) => {
  const { t, i18n } = useTranslation();




  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language).then(()=>{
        I18nManager.forceRTL(i18n.locale === 'ar');
        // I want to restart the app here
        RNRestart.restart();
    });
    onClose();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>

        <Text style={styles.header}>{t('changeLanguage')}</Text>
        <TouchableOpacity onPress={() => handleLanguageChange('en')}>
          <View style={[styles.languageOption, i18n.language === 'en' && styles.selectedLanguageOption]}>
            <View style={[styles.circle, i18n.language === 'en' && styles.selectedCircle]} />
            <Text style={styles.languageText}>{t('english')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageChange('ar')}>
          <View style={[styles.languageOption, i18n.language === 'ar' && styles.selectedLanguageOption]}>
            <View style={[styles.circle, i18n.language === 'ar' && styles.selectedCircle]} />
            <Text style={styles.languageText}>{t('arabic')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLanguageChange('tr')}>
          <View style={[styles.languageOption, i18n.language === 'tr' && styles.selectedLanguageOption]}>
            <View style={[styles.circle, i18n.language === 'tr' && styles.selectedCircle]} />
            <Text style={styles.languageText}>{t('turkish')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#eaf5fa',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal:25
    ,paddingVertical:30

},
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding:5
  },
  selectedLanguageOption: {
borderWidth:0.5,
borderRadius:5,
borderColor:'#528DA7'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#528DA7',
    marginHorizontal: 10,
  },
  selectedCircle: {
    backgroundColor: '#528DA7',
  },
  languageText: {
    fontSize: 18,
  },
  header:{
    fontSize:24,
    fontWeight:'700',
    color:'#528DA7'
  }
});

export default ChangeLang;
