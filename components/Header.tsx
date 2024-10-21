import { Text, Button, StyleSheet, View } from "react-native";
import React from "react";

export type HeaderProps = {
  setDisplayQR: Function;
};

const Header = ({ setDisplayQR }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>My Portfolio App</Text>
      <View style={styles.headerButtons}>
        <Button
          onPress={() => setDisplayQR(true)}
          title="Mi Info"
          color="lightgray"
        />
        <Button
          onPress={() => setDisplayQR(false)}
          title="Mi Repo"
          color="lightgray"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  headerTitle: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  headerButtons: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "space-between",
    paddingLeft: 75,
    paddingRight: 75,
    alignItems: "center",
  },
  buttonContainer: {
    width: "50%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
