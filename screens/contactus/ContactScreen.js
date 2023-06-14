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

const ContactScreen = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const [file, setFile] = useState(null);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('title', title);
      formData.append('message', message);
      if (file) {
        formData.append('file', {
          uri: file.uri,
          type: file.type,
          name: file.name,
        });
        }


      const headers = await getHeaderWithAuth();
        
      const response = await fetch(`${API_URL}/contactus/`, {
        method: 'POST',
        headers: headers,
        body: formData,
      });
  
      if (response.ok) {
        // Navigate to "messageSent" screen
        navigation.navigate('home');
      } else {
        // Handle error
        const errorData = await response.json();
        console.error(errorData);
        // Set error state
        setErr(errorData.message); // Assuming the error response has a 'message' property
      }
    } catch (error) {
      console.error(error);
      // Set error state
      setErr(error.message); // Set error message from the error object
    }
  };
  

  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.cancelled) {
        setFile(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const headers = await getHeaderWithAuth();
        const response = await fetch(`${API_URL}/my_info/`, {
          headers: headers,
        });
        const data = await response.json();

        setEmail(data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View>
          <CommonHeader headerTilte={t('contactUs')} />
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/contact/contact.png')}
            />
                  </View>
                  {err ? <Text style={styles.err}>{ err }</Text> : ''}
          <TextInput
            style={styles.input}
            placeholder={t('title')}
            placeholderTextColor="#b3c3cd"
            maxLength={250}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder={t('email')}
            placeholderTextColor="#b3c3cd"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.message}
            placeholder={t('message')}
            placeholderTextColor="#b3c3cd"
            multiline={true}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.selectButton} onPress={handleFileSelect}>
            <Text style={styles.buttonText}>{t('selectFile')}</Text>
          </TouchableOpacity>
          {file && (
            <Text style={styles.selectedFileText}>{file.name}</Text>
          )}
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{t('send')}</Text>
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
    bottom: 35,
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
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    top: 35,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#509ca4",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  message: {
    width: "100%",
    height: 100,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 18,
    textAlignVertical: 'top',
  },
  selectButton: {
    backgroundColor: "#509ca4",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: '36%',
    marginTop: 20,
  },
  selectedFileText: {
      marginTop: 10,
      marginBottom:10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: "#509ca4",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: '44%',
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    },
    err: {
        color: '#DD1A1E',
        fontSize: 16,
        textAlign: 'center',
        marginBottom:10
  }
});

export default ContactScreen;
