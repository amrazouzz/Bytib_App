import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getHeaderWithAuth } from '../../api/APIHeaders';

const SidebarHeader = () => {
  const [userInfo, setUserInfo] = useState(null);

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
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchUserInfo();
  }, []);

    return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
        source={{ uri: userInfo?.photo }}
        style={styles.image}
      />
      </View>
      <View >
      <Text style={styles.name}>{userInfo?.full_name}</Text>
      <Text style={styles.city}>{userInfo?.city_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#528DA7',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    margin:10,
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#fff',
    overflow: 'hidden',
    marginBottom: 10,
    marginTop:40
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    marginBottom:10,
    top:15
  },
  city: {
    fontSize: 14,
    color: '#fff',
    top:10
  },
});

export default SidebarHeader;
