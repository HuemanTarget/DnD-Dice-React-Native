import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Shake } from "react-native-motion";

const DSixScreen = () => {
  const [dSix, setDSix] = useState(require("../assets/dice/d6/d6_face3.png"));
  const [prevNum, setPrevNum] = useState(0);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  let rNumber = getRandomValue();

  const rollButtonPressed = () => {
    if (rNumber === prevNum) {
      const sameNums = () => {
        Alert.alert("You Rolled The Same Number", "Please Continue");
      };
      sameNums();
    }
    setDSix(require("../assets/dice/d6/d6_anim.gif"));

    let promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve();
      }, 1800);
    });

    Promise.all([promise1]).then(function () {
      function d() {
        randomFace();
      }
      d();
    });
  };

  const randomFace = () => {
    switch (rNumber) {
      case 1:
        setDSix(require("../assets/dice/d6/d6_face1.png"));
        break;
      case 2:
        setDSix(require("../assets/dice/d6/d6_face2.png"));
        break;
      case 3:
        setDSix(require("../assets/dice/d6/d6_face3.png"));
        break;
      case 4:
        setDSix(require("../assets/dice/d6/d6_face4.png"));
        break;
      case 5:
        setDSix(require("../assets/dice/d6/d6_face5.png"));
        break;
      case 6:
        setDSix(require("../assets/dice/d6/d6_face6.png"));
        break;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <View>
        <Shake value={dSix} type="timing">
          <Image style={styles.dice} source={dSix} />
        </Shake>
      </View>
      <View>
        <TouchableOpacity onPress={rollButtonPressed}>
          <Text style={styles.gamebutton}>Roll D4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DSixScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    zIndex: 1000,
    elevation: 1000,
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  gamebutton: {
    zIndex: 1000,
    elevation: 1000,
    marginTop: 45,
    marginBottom: 150,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "white",
  },
});
