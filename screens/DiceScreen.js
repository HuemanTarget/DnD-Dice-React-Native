import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DiceScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dice Screen</Text>
      <View style={{ flexDirection: "row", marginRight: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate("D4")}>
          <Text>D4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("D6")}>
          <Text>D6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiceScreen;
