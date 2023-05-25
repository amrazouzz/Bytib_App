import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { API_URL } from "../../api/api";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";

const DoctorsCarousel = () => {
  const [doctors, setDoctors] = useState([]);
  const [clicked, setClicked] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    const params = new URLSearchParams();
    params.append('top_rated', 'true');
  
    fetch(`${API_URL}/doctors?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        setDoctors(data.results);
      });
  };
  
  const handleFav = () =>{
    setClicked(!clicked);
  }
  const handleDoctorPress = (doctorId) => {
    navigation.navigate('doctorProfile', { doctorId });

  };
  
  return (
    <ScrollView
      style={styles.ScrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {doctors.map((doctor) => (
        <TouchableOpacity key={doctor.id} onPress={() => handleDoctorPress(doctor.id)}>
          <Card style={styles.card}>
            <View style={styles.cardImageContainer}>
              {clicked ? (
                <Icon
                  name="heart"
                  size={30}
                  color="red"
                  style={styles.heartIcon}
                  onPress={handleFav}
                />
              ) : (
                <Icon
                  name="heart-outline"
                  size={30}
                  color="black"
                  style={styles.heartIcon}
                  onPress={handleFav}
                />
              )}
              <Card.Cover 
                style={styles.cardImage}
                source={require("../../assets/images/home/doctor.png")}
              />
            </View>
            <Card.Content style={styles.cardContent}>
              
              <View style={styles.roundedBox}>
                <View>
                  <Title  className="text-center font-extrabold text-sm">
                    د. {doctor.name}
                  </Title>
                  <Paragraph className=" text-center font-light text-sm mb-7">
                    {doctor.categories.map((cat) => cat[1]).join(", ")}
                  </Paragraph>
                </View>
                <View style={styles.row}>
                  <View style={styles.icons}>
                    <Icon name="star" size={15} color="#fcdc1c" />
                    <Text style={styles.iconText}>{doctor.rating}</Text>
                  </View>
                  <View style={styles.icons}>
                    <Icon name="map-marker" size={15} color="#fcdc1c" />
                    <Text style={styles.iconText}>{doctor.distance} km</Text>
                  </View>
                </View>
              </View>
              
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
)};
  
const styles = StyleSheet.create({
  card: {
    marginTop: 2,
    width: 160,
    height:240,
    marginHorizontal: 10,
    position: "relative",
    marginBottom:70,
    bottom:10,
    backgroundColor: "#fff",
    borderRadius: 5,

  },
  cardImageContainer: {
    width: "100%",
    height: 120,
    overflow: "hidden",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cardImage: {
    alignSelf:'center',
    width: "60%",
    height: "100%",
    top:15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cardContent: {
    position: "relative",
    zIndex: 1,
  },
  roundedBox: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    top:5
  },
  ScrollView: {
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 5,
  },
  heartIcon:{
    position:"absolute"
    ,
    zIndex:1,
    top: 10,
    left:5,
  },
});

export default DoctorsCarousel;
