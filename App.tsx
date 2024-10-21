import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import InfoTab from "./components/InfoTab";
import RepoTab from "./components/RepoTab";

export default function App() {
  const [displayQR, setDisplayQR] = useState(true);

  return (
    <View style={styles.container}>
      <Header setDisplayQR={setDisplayQR} />
      <View style={styles.body}>{displayQR ? <InfoTab /> : <RepoTab />}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
});
