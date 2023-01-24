import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"Adivina el numero"} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
