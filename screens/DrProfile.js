import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import Header from "../components/doctorProfile/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { API_URL } from "../api/api";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const doctorId = route.params?.doctorId;
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const fetchDoctorData = () => {
    fetch(`${API_URL}/doctor/${doctorId}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctor(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<Icon key={i} name="star" size={20} color="#528DA7" />);
    }
    if (stars.length >= 0) {
      return <Text> لا توجد تقييمات بعد</Text>;
    }
    return stars;
  };
  const handleBookingPress = (doctorId) => {
    navigation.navigate('bookAppointment', {doctorId})
  }


  if (!doctor) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#eaf5fa" />
      <Header />
      <View style={{ flex: 1 }}>
        

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            {doctor.photo ? <Image
              style={styles.doctorImage}
              source={{ uri: `${doctor.photo}` }}
            /> : 
            <Image
            style={styles.doctorImage}
            source={require('../assets/images/home/Image.png')}
          />
            }
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.category}>
              {doctor.categories.map((cat) => cat[1]).join(", ")}
            </Text>
            <View style={styles.ratingContainer}>
              {renderRatingStars(doctor.rating)}
            </View>
            <TouchableOpacity onPress={() => handleBookingPress(doctorId)} style={styles.button}>
              <Text style={styles.buttonText}>Book an Appointment</Text>
            </TouchableOpacity>
          </View>

          {/* body */}
          <View>
            <Text>Here goes the Map</Text>
          </View>

          <View>
            <Text className='pt-10'>About section</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 130,
  },
  imageContainer: {
    width: 121,
    height: 121,
    borderRadius: 75,
    backgroundColor: "#504DE5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  doctorImage: {
    width: 118,
    height: 118,
    borderRadius: 60,
    borderColor:'#fff',
    borderWidth:3
  },
  infoContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rating: {
    marginLeft: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#528DA7",
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DrProfile;
