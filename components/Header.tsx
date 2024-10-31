import { Text, Button, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export type HeaderProps = {
  displayQR: Boolean;
  setDisplayQR: Function;
  lightTheme: Boolean;
  setLightTheme: Function;
};

const LIGHT_THEME = {
  currentTab: "rgba(68, 15, 7, 1)",
  otherTab: "rgba(239, 94, 47, 1)",
  buttonsBackground: "rgba(239, 86, 47, 1)",
  headerBackground: "rgba(239, 86, 47, .9)",
};

const DARK_THEME = {
  currentTab: "rgba(0, 0, 0, 1)",
  otherTab: "rgba(114, 158, 193, .5)",
  buttonsBackground: "rgba(37, 46, 61, 1)",
  headerBackground: "rgba(37, 46, 61, .6)",
};

const Header = ({
  displayQR,
  setDisplayQR,
  lightTheme,
  setLightTheme,
}: HeaderProps) => {
  // const theme = useContext(ThemeContext);
  const themeColors = lightTheme ? LIGHT_THEME : DARK_THEME;
  return (
    <View
      style={[styles.header, { backgroundColor: themeColors.headerBackground }]}
    >
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

      <View
        style={[
          styles.headerButtons,
          { backgroundColor: themeColors.buttonsBackground },
        ]}
      >
        <Button
          onPress={() => setDisplayQR(true)}
          title="Mi Info"
          color={displayQR ? themeColors.currentTab : themeColors.otherTab}
        />
        <Button
          onPress={() => setDisplayQR(false)}
          title="Mi Repo"
          color={!displayQR ? themeColors.currentTab : themeColors.otherTab}
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
