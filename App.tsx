import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [displayQR, setDisplayQR] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Portfolio App</Text>
        <View style={styles.headerButtons}>
          <Pressable style={styles.button} onPress={() => setDisplayQR(true)}>
            <Text
              style={{
                ...{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                },
                ...styles.shadoxboxing,
              }}
            >
              Mi info
            </Text>
          </Pressable>
          <Button
            onPress={() => setDisplayQR(false)}
            title="Mi Repo"
            color="lightgray"
            accessibilityLabel="Un botón pal QR"
          />
        </View>
      </View>
      {displayQR ? (
        <View style={styles.body}>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.avatar}
                source={require("./assets/SofyanAmrabat.jpg")}
              ></Image>
              <View
                style={{
                  margin: 10,
                  backgroundColor: "lightgray",
                  padding: 10,
                  borderRadius: 10,
                  width: "70%",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 20,
                  }}
                >
                  Descripción sobre mí!
                </Text>
                <Text>
                  Soy profe y me gusta mi trabajo aunque a veces me de por
                  enrevesar prácticas para mis queridos alumnos
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "black",
                fontWeight: "900",
                textTransform: "capitalize",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              cosas que me gustan mucho:
            </Text>
            <ScrollView style={{ padding: 10 }}>
              <Text style={styles.hobbies}>Salir a pasear</Text>
              <Text style={styles.hobbies}>Senderismo</Text>
              <Text style={styles.hobbies}>Ir a la playita</Text>
              <Text style={styles.hobbies}>Domingos de misa</Text>
              <Text style={styles.hobbies}>La guitarrita</Text>
              <Text style={styles.hobbies}>El monte con lluvia</Text>
              <Text style={styles.hobbies}>Viajar</Text>
              <Text style={styles.hobbies}>Música variadita</Text>
              <Text style={styles.hobbies}>Anime</Text>
              <Text style={styles.hobbies}>Ducharme</Text>
              <Text style={styles.hobbies}>Videojuegos</Text>
              <Text style={styles.hobbies}>Ir de cenar romántica</Text>
            </ScrollView>
          </View>
        </View>
      ) : (
        <View style={styles.body}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
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
  header: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  headerButtons: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "50%",
  },
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
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
