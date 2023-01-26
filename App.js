import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View} from "react-native";
import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen";
import GameScreen from "./src/screens/GameScreen";
import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts({
    DancingScriptRegular:require('./src/assets/fonts/DancingScript-Regular.ttf')
  })
  const [userNumber, setUserNumber] = useState()
  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }
  let content = <StartGameScreen onStartGame={handleStartGame}/>
  if(userNumber){
    content = <GameScreen/>
  }
  if(!loaded){
    return null
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"Guss a number"} newStyles={{fontFamily:'DancingScriptRegular'}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
