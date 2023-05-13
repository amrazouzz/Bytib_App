import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { API_URL } from "../../api/api";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DoctorsCarousel = () => {
  const [doctors, setDoctors] = useState([]);
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    fetch(`${API_URL}/doctors`)
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        setDoctors(data.results);
      });
  };

  const handleFav = () =>{
    setClicked(!clicked);
  }

  return (
    <ScrollView
      style={styles.ScrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {doctors.map((doctor) => (
        <Card key={doctor.id} style={styles.card}>
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
              source={{ uri: "https://source.unsplash.com/1024x768/?nature" }}
            />
          </View>
          <Card.Content style={styles.cardContent}>
            <View style={styles.roundedBox}>
              <View>
                <Title className="text-center font-extrabold text-sm">
                  {doctor.name}
                </Title>
                <Paragraph className=" text-center font-light text-sm mb-10">
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
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 2,
    width: 160,
    height:250,
    marginHorizontal: 10,
    position: "relative",
    marginBottom:70,
    bottom:10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  cardImageContainer: {
    width: "100%",
    height: 120,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardImage: {
    alignSelf:'center',
    width: "95%",
    height: "100%",
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
