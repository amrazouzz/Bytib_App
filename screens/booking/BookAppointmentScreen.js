import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import AppointmentHeader from '../../components/bookAppointment/AppointmentHeader';
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../api/api';
import { getHeaderWithAuth } from '../../api/APIHeaders';

const BookAppointmentScreen = () => {
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const route = useRoute();
  const doctorId = route.params?.doctorId;
  const [availableTime, setAvailableTime] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Add selectedTimeSlot state variable


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {

    fetchAvailabilityData();
  }, [selectedDate]);

  const fetchAvailabilityData = async () => {
    try {
      const headers = await getHeaderWithAuth();
      const response = await fetch(`${API_URL}/doctor/${doctorId}/availability`, {
        headers: headers,
      });
      
      const data = await response.json();


      if (response.ok) {
        const selectedDay = selectedDate.getDate().toString();
        const filteredTime = data.availability.work_time_per_date.filter(item => item.date === selectedDay);
        setAvailableTime(filteredTime.length > 0 ? filteredTime[0].time : []);  
        

        
      } else {
        // Handle error case
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }

    
  };
  
  
  const handleDateChange = (event, selected) => {
    setShowDatePicker(false);
    if (selected) {
      setSelectedDate(selected);
    }
  };

  const renderTimeSlot = ({ item }) => {
    const isSelected = selectedTimeSlot && selectedTimeSlot.id === item.id;

    return (
      <TouchableOpacity
        style={[
          styles.timeSlot,
          isSelected && styles.selectedTimeSlot
        ]}
        onPress={() => handleTimeSlotSelect(item)}
      >
        <Text
          style={[
            styles.timeSlotText,
            isSelected && styles.selectedTimeSlotText
          ]}
        >
          {item.slot}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleTimeSlotSelect = (timeSlot) => {
    // Handle the selected time slot
    setSelectedTimeSlot(timeSlot);

  };


  const handleConfirm = async () => {
    const selectedDateTime = new Date(selectedDate);
    const formattedDate = selectedDateTime.toISOString().split('T')[0];
    const formattedTime = selectedTimeSlot.slot + ':00';

    const bookingDateTime = `${formattedDate} ${formattedTime}`;
    

    try {
      const headers = await getHeaderWithAuth();
      const response = await fetch(`${API_URL}/doctor/${doctorId}/book_appointment/`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          booking_datetime: bookingDateTime,
        }),
      });
    
      // Handle the response
      if (response.ok) {
        // Appointment booked successfully
        navigation.navigate('bookSuccess');
      } else {
        // Handle error case
        const errorResponse = await response.json();
        console.log(errorResponse);
        navigation.navigate('bookFail');
      }
    } catch (error) {
      console.log(error);
    }
    
  }; 
  return (
    <View style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      <AppointmentHeader />

      <View>
        <Text className='font-bold px-2 pt-7 pb-5'>Choose Date</Text>
        <View>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowDatePicker(true)}
            className='justify-between'
          >
            <Text style={styles.selectedDate}>
              {selectedDate.toDateString()}
            </Text>
            <Icon name="calendar-outline" size={24} color="#528DA7" />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="calendar"
              onChange={handleDateChange}
            />
          )}
        </View>
      </View>

      <Text className='font-bold px-2  pb-2'>Available Time</Text>


      <FlatList
        data={availableTime}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTimeSlot}
      />
    <TouchableOpacity onPress={handleConfirm}>
      <View style={styles.buttonContainer}>
        <Text className='text-white font-bold' >CONFIRM</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#D3E3F1'
  },
  timeSlot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3E3F1",
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 5,
  },

  timeSlotText: {
    fontSize: 16,
  },

  selectedTimeSlot: {
    backgroundColor: "#528DA7", // Adjust the highlight color as desired
  },

  selectedTimeSlotText: {
    color: "#fff", // Adjust the text color of the selected time slot
  },

  timeSlotRow: {
    flexWrap: "wrap", // Allow wrapping of time slots to new rows
    justifyContent: "center",
  },
  buttonContainer:{
    alignSelf:'center',
    marginBottom:20,
    marginTop:5,
    backgroundColor:'#528DA7',
    borderRadius:5,
    padding:10,
    width:'95%',
    height:50,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  }
});
export default BookAppointmentScreen;