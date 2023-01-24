import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Card = ({newStyles,children}) => {
  return (
    <View style= {{...styles.Container,...newStyles}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    Container:{
        width:300,
        maxWidth:"80%",
        alignItems: 'center',
        padding: 20,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius: 10,
        shadowOpacity:0.30,
        elevation: 5,
        borderRadius:10,
        backgroundColor:colors.secundary,
      },
})