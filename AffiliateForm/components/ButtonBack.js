import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Path, Svg } from "react-native-svg";


const ButtonBack = ({ onLongPress }) => {
  return (
    <TouchableOpacity style={styles.button} onLongPress={onLongPress}>
       <Svg width="20" height="19" viewBox="0 0 20 19" fill="none">
        <Path d="M7.62498 15.0418L8.74123 13.9256L5.1154 10.2918H17.9166V8.7085H5.1154L8.74915 5.07475L7.62498 3.9585L2.08331 9.50016L7.62498 15.0418Z" fill="#BABABA"/>
      </Svg>
      <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row", 
  },
  buttonText: {
    color: "#bababa",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    marginLeft: 8, 
  },
});

export default ButtonBack;
