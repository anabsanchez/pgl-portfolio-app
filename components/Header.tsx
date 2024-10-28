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
          color={displayQR ? "rgba(0, 0, 0, 1)" : "rgba(255, 165, 0, 0)"}
        />
        <Button
          onPress={() => setDisplayQR(false)}
          title="Mi Repo"
          color={!displayQR ? "rgba(0, 0, 0, 1)" : "rgba(255, 165, 0, 0)"}
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
    backgroundColor: "#000",
    color: "rgba(255, 165, 0, 0.9)",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    textTransform: "uppercase",
    marginTop: -3,
    marginBottom: 3,
  },
  headerButtons: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 165, 0, 0.5)",
    justifyContent: "space-between",
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 4,
    alignItems: "center",
  },
});
