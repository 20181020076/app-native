import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>StartGameScree</Text>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:'center',
        backgroundColor: 'red'
        
        
    }
})