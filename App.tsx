import { createContext, useContext, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import InfoTab from "./components/InfoTab";
import Repo from "./components/RepoTab";
// <ThemeContext.Provider value={theme}> </ThemeContext.Provider>

const ThemeContext = createContext(null);

export default function App() {
  const [displayQR, setDisplayQR] = useState(true);
  // const [theme, setTheme] = useState("light");
  const [lightTheme, setLightTheme] = useState(true);

  return (
    <View style={styles.container}>
      <Header
        displayQR={displayQR}
        setDisplayQR={setDisplayQR}
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
      />
      <View style={styles.body}>
        {displayQR ? (
          <InfoTab lightTheme={lightTheme} />
        ) : (
          <Repo lightTheme={lightTheme} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    marginTop: 10,
  },
});
