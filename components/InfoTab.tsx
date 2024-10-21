import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import React from "react";
import Hobbies from "../data/Hobbies";

const Info = () => {
  return (
    <View>
      <View style={styles.descriptionContainer}>
        <Image
          style={styles.avatar}
          source={require("../assets/SofyanAmrabat.jpg")}
        />
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
          <Text>
            Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
            prácticas para mis queridos alumnos
          </Text>
        </View>
      </View>
      <Text style={styles.hobbiesTitle}>cosas que me gustan mucho:</Text>

      <ScrollView style={{ padding: 10 }}>
        {Hobbies.map((hobby) => {
          return (
            <ScrollView>
              <Text style={styles.hobbies}>{hobby.text}</Text>
            </ScrollView>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionBox: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  hobbiesTitle: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  hobbiesList: {
    padding: 10,
  },
  hobbies: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});
