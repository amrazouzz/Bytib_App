import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAPIHeaders = async (lang_code, with_auth) => {
  if (typeof lang_code !== 'string' || lang_code.length !== 2 || !/^[a-z]+$/.test(lang_code)) {
    console.error('Invalid lang_code:', lang_code);
    return null;
  }

  if (typeof with_auth !== 'boolean') {
    console.error('Invalid with_auth:', with_auth);
    return null;
  }

  const headers = {
    'Content-Type': 'application/json'
  };

  // Add lang_code to headers with the name Bytib-Lang
  headers['Bytib-Lang'] = lang_code;

  if (with_auth) {
    // Get the token from AsyncStorage or any other storage mechanism
    const token = await AsyncStorage.getItem('AccessToken');
    
    if (token) {
      // Add Bearer token to headers with the name Authorization
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

export const getHeaderWithAuth = async () => {
  const lang_code = await AsyncStorage.getItem('UserLanguageCode');
  if (lang_code) {
    return getAPIHeaders(lang_code, true);
  } else {
    return getAPIHeaders('en', true);
  }
};

export const getHeaders = async () => {
  const lang_code = await AsyncStorage.getItem('UserLanguageCode');
  if (lang_code) {
  return getAPIHeaders(lang_code, false);} 
  else {
    return getAPIHeaders('en', false);
  }
};