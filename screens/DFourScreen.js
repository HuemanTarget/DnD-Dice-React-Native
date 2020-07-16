import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Shake } from "react-native-motion";

const DFourScreen = () => {
  const [dFour, setDFour] = useState(
    require("../assets/dice/d4/d4_face2_3_rev.png")
  );
  const [prevNum, setPrevNum] = useState(0);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 12) + 1;
  };

  let rNumber = getRandomValue();

  const rollButtonPressed = () => {
    if (rNumber === prevNum) {
      const sameNums = () => {
        Alert.alert("You Rolled The Same Number", "Please Continue");
      };
      sameNums();
    }
    setDFour(require("../assets/dice/d4/4d_face_anim.gif"));

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
        setDFour(require("../assets/dice/d4/d4_face1_1_rev.png"));
        break;
      case 2:
        setDFour(require("../assets/dice/d4/d4_face2_1_rev.png"));
        break;
      case 3:
        setDFour(require("../assets/dice/d4/d4_face3_1_rev.png"));
        break;
      case 4:
        setDFour(require("../assets/dice/d4/d4_face4_2_rev.png"));
        break;
      case 5:
        setDFour(require("../assets/dice/d4/d4_face1_2_rev.png"));
        break;
      case 6:
        setDFour(require("../assets/dice/d4/d4_face2_2_rev.png"));
        break;
      case 7:
        setDFour(require("../assets/dice/d4/d4_face3_3_rev.png"));
        break;
      case 8:
        setDFour(require("../assets/dice/d4/d4_face4_3_rev.png"));
        break;
      case 9:
        setDFour(require("../assets/dice/d4/d4_face1_4_rev.png"));
        break;
      case 10:
        setDFour(require("../assets/dice/d4/d4_face2_3_rev.png"));
        break;
      case 11:
        setDFour(require("../assets/dice/d4/d4_face3_4_rev.png"));
        break;
      case 12:
        setDFour(require("../assets/dice/d4/d4_face4_4_rev.png"));
        break;
    }

    setPrevNum(rNumber);
  };

  // console.log(`step 1 the prevNum r p ${rNumber} ${prevNum}`);

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
        <Shake value={dFour} type="timing">
          <Image style={styles.dice} source={dFour} />
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

export default DFourScreen;

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
