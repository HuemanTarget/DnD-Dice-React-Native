import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome5
          name="dice-d20"
          size={125}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text
          style={{
            fontSize: 50,
            fontWeight: "500",
            color: "white",
            marginBottom: 5,
          }}
        >
          D&D Dice
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Dice")}>
          <Text>Hello World</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
