import { Text, Button, StyleSheet, View } from "react-native";
import React from "react";

export type HeaderProps = {
  displayQR: Boolean;
  setDisplayQR: Function;
};

const Header = ({ displayQR, setDisplayQR }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>My Portfolio</Text>
      <View style={styles.headerButtons}>
        <Button
          onPress={() => setDisplayQR(true)}
          title="Mi Info"
          color="rgba(0, 0, 0, 1)"
        />
        <Button
          onPress={() => setDisplayQR(false)}
          title="Mi Repo"
          color="rgba(0, 0, 0, 0.1)"
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
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,

    textTransform: "uppercase",
  },
  headerButtons: {
    flexDirection: "row",
    backgroundColor: "#352727",
    justifyContent: "space-between",
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 4,
    alignItems: "center",
  },
  buttonOnPress: {},
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
