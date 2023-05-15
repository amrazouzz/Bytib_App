import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const ChatsCarousel = () => {
  const data = [
    {
      doctor: {
        name: 'Doctor 1',
        online: true,
      },
      category: 'General',
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '10:30 AM',
      hasNewMessage: true,
    },
    {
      doctor: {
        name: 'Doctor 2',
        online: false,
      },
      category: 'Dentist',
      name: 'Jane Smith',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit.',
      time: 'Yesterday',
      hasNewMessage: false,
    },
    {
      doctor: {
        name: 'Doctor 3',
        online: true,
      },
      category: 'Pediatrician',
      name: 'Bob Johnson',
      message: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      time: 'Monday',
      hasNewMessage: true,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map((chat, index) => (
        <View
          key={index}
          style={[
            styles.chatContainer,
            chat.hasNewMessage && { backgroundColor: '#C5D6F2' },
          ]}
        >
          <View style={styles.doctorContainer}>
            <ImageBackground
              source={require('../../assets/images/home/img-7.png')}
              style={styles.circle}
              imageStyle={{ borderRadius: 50 }}
            >
              <View
                style={[
                  styles.onlineIndicator,
                  { backgroundColor: chat.doctor.online ? '#7ED321' : '#D0021B' },
                ]}
              />
            </ImageBackground>
          </View>
          <View style={styles.chatInfoContainer}>
            <View style={styles.categoryNameContainer}>
              <Text style={styles.categoryText}>{chat.category}</Text>
            </View>
            <View style={styles.chatDetailsContainer}>
              <Text style={styles.chatNameText}>{chat.name}</Text>
              <Text style={styles.chatMessageText}>
                {chat.message.slice(0, 35)}...
              </Text>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{chat.time}</Text>
            {chat.hasNewMessage && (
              <View style={styles.newMessageIndicator} />
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    paddingHorizontal:10,
  },
  doctorContainer: {
    marginRight: 16,
  },
  circle: {
    width: 60,
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius:50
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    top:-8
  },
  chatInfoContainer: {
    flex: 1,
  },
  categoryNameContainer: {
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#828282',
    top:3
  },
  chatDetailsContainer:{
    fontSize:5
  },
  timeContainer:{
    fontWeight:'100'
  },
  timeText:{
    fontWeight:'100',
    fontSize:11,
    top:-18
  },
  chatNameText:{
    fontSize:16,
    color:'#528DA7',
    fontWeight:'800'
  },
  chatMessageText:{
    fontSize:11,
    color:'#828282',
    paddingTop:3
  },
  newMessageIndicator:{
    width: 14,
    height: 14,
    borderRadius: 7,
    top:10,
    backgroundColor:"#2121E5",
    alignSelf:'flex-end'
  }


})


export default ChatsCarousel
