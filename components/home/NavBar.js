import React from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import * as IconsSolid from 'react-native-heroicons/solid';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#EAF5FA'

  }}>
      
      <View style={{

position: 'absolute',
alignSelf: 'center',
backgroundColor: '#EAF5FA',
width: 70,
height: 70,
borderRadius: 35,
bottom: 35,
zIndex: 10


}}>

<TouchableOpacity>
    <View style={[styles.button, styles.actionBtn]}>

        {/* <Image style={{ width: 70, height: 70, bottom:4,}}
            resizeMode="contain"
            source={require('../../assets/home/NB.png')}/> */}
            <View style={styles.compassContainer} >
            <Image  source={require('../../assets/home/navbar/compass.png')} style={styles.CompassIcon} />
    </View>
    </View>
</TouchableOpacity>
</View>
<ImageBackground style={styles.NavContainer}
  source={require('../../assets/home/navbar/bg.png')} >
      <View>
        <View style={styles.NavBar}>
          <TouchableOpacity
            style={styles.IconBehave}
            onPress={() => navigation.navigate('articles')}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4'}}
          >
            <IconsSolid.QueueListIcon color="#509ca4" className="h-7 w-7 text-gray-500" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('chat')}
            style={styles.IconBehaveM}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4'}}
          >
            <Icons.ChatBubbleLeftEllipsisIcon color="#509ca4" className="h-7 w-7 text-gray-500" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('favScreen')}
            style={styles.IconBehaveM}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4'}}
          >
            <Icons.HeartIcon color="#509ca4" className="h-7 w-7 left-5 " />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('home')}
            style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 30, color: '#acccd4', left:5}}
          >
            <Icons.HomeIcon  color="#509ca4" className="h-7 left-5 w-7" />
            {/* <Image  source={require('../../assets/home/navbar/Home.png')} /> */}
          </TouchableOpacity>
        </View>
      </View>

      </ImageBackground>
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
    backgroundColor: 'transparent',
    width:'106%',
    height:70,
    left:-22,
  },
  NavBar: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    top:12,
     
    
  },
  IconBehave: {
    padding: 10
  },
  IconBehaveM: {
    padding: 40,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
},
compassContainer:{
  backgroundColor: "#329D9C",
  borderRadius:50,
  padding:15
},
CompassIcon:{
  width: 30,
  height: 30,
  tintColor: '#ffff',

}
});

export default NavBar;
