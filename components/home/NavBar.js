import React, { useState }  from "react";
import { Pressable, ScrollView, Text, View,  } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import ArticlesCarousel from "./Articles";

const NavBar = () => {
  const navigation = useNavigation();
  const [navbarVisible, setNavbarVisible] = useState(true);



  const handleNavbarToggle = () => {
    setNavbarVisible(!navbarVisible);
  };

  const renderArticles = () => {
    if (!navbarVisible) {
      return (
          <ArticlesCarousel />
      );
    }
    return null;
  };

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#EAF5FA",
        }}
      >
      <View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#EAF5FA",
        }}
      >
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("map")}
          style={styles.button}
          android_ripple={{
            borderless: true,
            radius: 30,
            color: "#acccd4",
          }}>
            <View>
              <Image
                style={{ width: 60, height: 60, top: 10 }}
                resizeMode="contain"
                source={require("../../assets/home/navbar/center.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Pressable onPress={handleNavbarToggle}>
            <ImageBackground
          style={styles.NavContainer}
              source={require("../../assets/home/navbar/bg.png")}
              >
                
                
          <View>
            <View style={styles.NavBar}>
              <TouchableOpacity
                style={styles.IconBehave}
                onPress={() => navigation.navigate("sidebar")}
                android_ripple={{
                  borderless: true,
                  radius: 30,
                  color: "#acccd4",
                }}
              >
                <Image
                  style={styles.navIcon}
                  source={require("../../assets/home/navbar/menu.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("chat")}
                android_ripple={{
                  borderless: true,
                  radius: 30,
                  color: "#acccd4",
                }}
                className="right-2"
              >
                <Image
                  style={styles.navIcon}
                  source={require("../../assets/home/navbar/messages.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("favScreen")}
                className="left-7"
                android_ripple={{
                  borderless: true,
                  radius: 30,
                  color: "#acccd4",
                }}
              >
                <Image
                  style={styles.navIcon}
                  source={require("../../assets/home/navbar/fav.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("home")}
                style={styles.IconBehave}
                android_ripple={{
                  borderless: true,
                  radius: 30,
                  color: "#acccd4",
                  left: 5,
                }}
              >
                <Image
                  style={styles.navIcon}
                  className="left-5"
                  source={require("../../assets/home/navbar/home.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
              </ImageBackground>
              
              </Pressable>
      </View>
    </View>

      </View>
      {renderArticles()}
    </View>
  );
};

const styles = StyleSheet.create({
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    width: "106%",
    height: 70,
    left: -22,
  },
  NavBar: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
    top: 12,
  },
  IconBehave: {},
  IconBehaveM: {
    padding: 30,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  compassContainer: {
    backgroundColor: "#329D9C",
    borderRadius: 50,
    padding: 15,
  },
  CompassIcon: {
    width: 30,
    height: 30,
    tintColor: "#ffff",
  },
  navIcon: {
    width: 20,
    height: 20,
  },
  articlesContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 10,
  },
  article: {
    alignItems: "center",
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 25
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  articleText: {
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 10
  },
  touchableMap: {
    top: 5,
    left: 5,
  },

});

export default NavBar;