import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import QRCode from "react-native-qrcode-svg";

const RepoTab = () => {
  return (
    <View style={styles.qrContainer}>
      <QRCode value="https://github.com/adhernea" />
    </View>
  );
};

export default RepoTab;

const styles = StyleSheet.create({
  qrContainer: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
