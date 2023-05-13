import React from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import * as IconsSolid from 'react-native-heroicons/solid';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <TouchableOpacity
            style={styles.IconBehave}
            onPress={() => navigation.navigate('articles')}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4'}}
          >
            <IconsSolid.QueueListIcon color="#509ca4" className="h-7 w-7 text-gray-500" />
          </TouchableOpacity>
          <Pressable
            style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4'}}
          >
            <Icons.ChatBubbleLeftEllipsisIcon color="#509ca4" className="h-7 w-7 text-gray-500" />
          </Pressable>
          <Pressable
            style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4'}}
          >
            <Icons.HeartIcon color="#509ca4" className="h-7 w-7 text-gray-500" />
          </Pressable>
          <Pressable
            style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4'}}
          >
            <Icons.HomeIcon color="#509ca4" className="h-7 w-7 text-gray-500" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  IconBehave: {
    padding: 14,
  },
});

export default NavBar;
