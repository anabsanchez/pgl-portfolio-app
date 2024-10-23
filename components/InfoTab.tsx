import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import Hobbies from "../data/Hobbies";

const Info = () => {
  return (
    <View style={styles.infoTab}>
      <ImageBackground
        source={require("../assets/images/background/SolarSystem.jpg")}
        resizeMode="cover"
      >
        <View style={styles.descriptionContainer}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/profile/AnaSanchez.jpeg")}
          />
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionTitle}>Hey there, this is Ana!</Text>
            <Text style={styles.description}>
              I'm just a programming student trying to figure out my way into
              this crazy world of ones and zeros, despite my teacher's efforts
              to make it as difficult as possible.
            </Text>
          </View>
        </View>
        <View style={styles.hobbiesContainer}>
          <Text style={styles.hobbiesTitle}>
            Now, here's some of the stuff i enjoy:
          </Text>

          <ScrollView style={styles.hobbiesList}>
            {Hobbies.map((hobby) => {
              return (
                <ScrollView>
                  <Text style={styles.hobbies}>{hobby.text}</Text>
                </ScrollView>
              );
            })}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoTab: {
    width: "100%",
    height: "100%",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginLeft: -5,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(240, 240, 240, 0.1)",
    height: 100,
    padding: 5,
    paddingRight: 16,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  descriptionBox: {
    width: "70%",
    margin: 10,
    fontSize: 10,
  },
  descriptionTitle: {
    fontWeight: "700",
    fontSize: 15,
    color: "white",
  },
  description: {
    textAlign: "justify",
    fontSize: 12,
    color: "white",
  },
  hobbiesContainer: {
    width: 300,
    backgroundColor: "rgba(40, 40, 40, 0.3)",

    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  hobbiesTitle: {
    color: "white",
    fontWeight: "800",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  hobbiesList: {
    padding: 10,
    width: 300,
    alignSelf: "center",
  },
  hobbies: {
    padding: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "rgba(200, 200, 200, 0.1)",
    margin: 5,
    borderRadius: 5,
  },
});
