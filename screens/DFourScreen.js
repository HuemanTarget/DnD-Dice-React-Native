import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Shake } from "react-native-motion";

const DFourScreen = () => {
  const [dFour, setDFour] = useState(require("../assets/dice/d4/d4_face3.png"));

  const getRandomValue = () => {
    //add 1 to random math so you don't get a zero
    return Math.floor(Math.random() * 4) + 1;
  };

  // const randomFace = () => {
  //   let rNumber = getRandomValue();

  //   switch (rNumber) {
  //     case 1:
  //       setDFour(require("../assets/dice/d4/d4_face1.png"));
  //       break;
  //     case 2:
  //       setDFour(require("../assets/dice/d4/d4_face2.png"));
  //       break;
  //     case 3:
  //       setDFour(require("../assets/dice/d4/d4_face3.png"));
  //       break;
  //     case 4:
  //       setDFour(require("../assets/dice/d4/d4_face4.png"));
  //       break;
  //   }
  // };

  const rollButtonPressed = () => {
    setDFour(require("../assets/dice/d4/4d_face_anim.gif"));
    // setTimeout(() => {
    //   setDFour(require("../assets/dice/d4/4d_face_anim.gif"));
    // }, 300);
    // randomFace();
    let promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("2second");
        // setDFour(require("../assets/dice/d4/4d_face_anim.gif"));
        resolve();
      }, 700);
    });

    // let promise2 = new Promise(function (resolve, reject) {
    //   setTimeout(function b() {
    //     alert("Hello B");
    //     resolve();
    //   }, 3000);
    // });

    // let promise3 = new Promise(function (resolve, reject) {
    //   setTimeout(function c() {
    //     alert("Hello C");
    //     resolve();
    //   }, 3000);
    // });

    Promise.all([promise1]).then(function () {
      function d() {
        let rNumber = getRandomValue();

        switch (rNumber) {
          case 1:
            setDFour(require("../assets/dice/d4/d4_face1.png"));
            break;
          case 2:
            setDFour(require("../assets/dice/d4/d4_face2.png"));
            break;
          case 3:
            setDFour(require("../assets/dice/d4/d4_face3.png"));
            break;
          case 4:
            setDFour(require("../assets/dice/d4/d4_face4.png"));
            break;
          default:
            if (rNumber === rNumber) {
              setDFour(require("../assets/dice/d4/d4_face1.png"));
            }
        }
        console.log(rNumber);
      }
      d();
    });
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
        {/* <Shake value={dFour} type="timing"> */}
        <Image style={styles.dice} source={dFour} />
        {/* </Shake> */}
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
    width: 200,
    height: 200,
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
