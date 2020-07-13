import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DiceScreen = () => {
  const navigation = useNavigation();

  const dFour = require("../assets/dice/d4/d4_face1.png");
  const dSix = require("../assets/dice/d6/d6_face5.png");

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>Pick Your Dice</Text>
      <View style={{ flexDirection: "row", marginRight: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate("D4")}>
          <Image style={styles.dice} source={dFour} />
          <Text>D4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("D6")}>
          <Image style={styles.dice} source={dSix} />
          <Text>D6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    width: 50,
    height: 50,
    marginRight: 25,
  },
});
