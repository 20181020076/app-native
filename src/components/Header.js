import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
const Header = ({title,newStyles}) => {
  return (
      <View style={{...styles.header,...newStyles}}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

  );
};

export default Header;
const styles = StyleSheet.create({
  header:{
    backgroundColor:colors.primary,
    height: 90,
    paddingTop:36,
    alignItems:"center",
    justifyContent:'center',
  },
  headerTitle:{
    color:'white',
    fontSize:22
  },
})
