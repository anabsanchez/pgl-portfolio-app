import { StyleSheet, ScrollView, Text, View } from "react-native";
import React from "react";

const hobbiesData = [
  { text: "Quality food." },
  { text: "Watching the sun rise and set each day." },
  { text: "Spotting planes, helicopters, and UFOs in the sky." },
  { text: "Listening to good music (plus some guilty pleasure genres)." },
  { text: "Going anyplace for walks with a certain someone  :3" },
  { text: "Traveling the world." },
  { text: "Learning about anatomy, astronomy (or anything, really)." },
  { text: "Watching movies and series." },
  {
    text: "Going to the beach and being able to swim (weather isn't very helpful, usually).",
  },
  { text: "Reaching a deep understanding of math, physics or informatics." },
  { text: "Going hiking and being in awe of amazing landscapes." },
  { text: "..." },
  { text: "..." },
  { text: "..." },
];

const LIGHT_THEME = {
  containerBackground: "rgba(150, 40, 40, .3)",
  itemBackground: "rgba(255, 165, 0, 0.3)",
};

const DARK_THEME = {
  containerBackground: "rgba(40, 40, 40, 0.4)",
  itemBackground: "rgba(255, 165, 0, 0.1)",
};

export type HobbiesProps = {
  lightTheme: boolean;
};

const Hobbies = ({ lightTheme }: HobbiesProps) => {
  const themeColors = lightTheme ? LIGHT_THEME : DARK_THEME;

  return (
    <View
      style={[
        styles.hobbiesContainer,
        { backgroundColor: themeColors.containerBackground },
      ]}
    >
      <Text style={styles.hobbiesTitle}>
        Now, here's some of the stuff I enjoy:
      </Text>
      <ScrollView style={styles.hobbiesList}>
        {hobbiesData.map((hobby, index) => (
          <View
            key={index}
            style={[
              styles.hobbyItem,
              { backgroundColor: themeColors.itemBackground },
            ]}
          >
            <Text style={styles.hobbyText}>{hobby.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Hobbies;

const styles = StyleSheet.create({
  hobbiesContainer: {
    width: 300,
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
  hobbyItem: {
    padding: 15,
    margin: 5,
    borderRadius: 5,
  },
  hobbyText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
  },
});
