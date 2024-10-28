import { Text, Button, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export type HeaderProps = {
  displayQR: Boolean;
  setDisplayQR: Function;
  lightTheme: Boolean;
  setLightTheme: Function;
};

const Header = ({
  displayQR,
  setDisplayQR,
  lightTheme,
  setLightTheme,
}: HeaderProps) => {
  // const theme = useContext(ThemeContext);
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>My Portfolio</Text>
        <View>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={24}
            color="white"
            onPress={() => setLightTheme(!lightTheme)}
          />
        </View>
      </View>

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
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    paddingLeft: 85,
    paddingRight: 20,
  },
  headerTitle: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    textTransform: "uppercase",
    marginTop: -3,
    marginBottom: 3,
  },
  headerButtons: {
    flexDirection: "row",
    backgroundColor: "#1c2833",
    justifyContent: "space-between",
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 4,
    alignItems: "center",
  },
  themeIcon: {
    color: "white",
  },
});
