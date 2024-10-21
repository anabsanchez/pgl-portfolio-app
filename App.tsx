import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [displayQR, setDisplayQR] = useState(true);

  const hobbies = [
    { text: "Salir a pasear" },
    { text: "Ir a la playita" },
    { text: "Domingos de misa" },
    { text: "La guitarrita" },
    { text: "El monte con lluvia" },
    { text: "Viajar" },
    { text: "Música variadita" },
    { text: "Anime" },
    { text: "Ducharme" },
    { text: "Videojuegos" },
    { text: "Ir de cenar romántica" },
  ];

  return (
    <View style={styles.container}>
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
      {displayQR ? (
        <View style={styles.body}>
          <View>
            <View style={styles.descriptionContainer}>
              <Image
                style={styles.avatar}
                source={require("./assets/SofyanAmrabat.jpg")}
              />
              <View style={styles.descriptionBox}>
                <Text style={styles.descriptionTitle}>
                  Descripción sobre mí!
                </Text>
                <Text>
                  Soy profe y me gusta mi trabajo aunque a veces me de por
                  enrevesar prácticas para mis queridos alumnos
                </Text>
              </View>
            </View>
            <Text style={styles.hobbiesTitle}>cosas que me gustan mucho:</Text>

            <ScrollView style={{ padding: 10 }}>
              {hobbies.map((hobby) => {
                return (
                  <ScrollView>
                    <Text style={styles.hobbies}>{hobby.text}</Text>
                  </ScrollView>
                );
              })}
            </ScrollView>
          </View>
        </View>
      ) : (
        <View style={styles.body}>
          <View style={styles.qrContainer}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // general styles:
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // header styles:
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
  // body styles:
  body: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
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
  // hobbies styles:
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
  // qr code styles:
  qrContainer: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
