import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, {useState} from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  const [value,setValue] = useState('');
  const handleInput = text => {
    console.log(text)
    setValue(text.replace(/[^0-9]/g,''))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Game</Text>

      <Card newStyles={styles.inputContainer}>
        <Text style={styles.subtitle}>Choose a number</Text>
        <Input
          bluronSubmit
          autocapitalie="none"
          autoCorrect={false}
          keyboardType={'numeric'}
          maxLength={2}
          value={value}
          onChangeText={handleInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cleanButton}>
            <Button
              style={{ backgroundColor: "red" }}
              title="Clean"
              onPress={() => {
                console.log("limpiar");
              }}
              color={colors.disableColor}
            />
          </View>
          <View style={styles.confirmStyle}>
            <Button
              title="Confirm"
              onPress={() => {
                console.log("confirmar");
              }}
              color={colors.actionColor}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
    color: "white",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white",
  },
  subtitle: {
    color: "white",
  },
  inputContainer: {
    backgroundColor: colors.secundary,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  cleanButton: {
    width: 100,
    backgroundColor: colors.disableColor,
  },
  confirmStyle: {
    width: 100,
    backgroundColor: colors.actionColor,
  },
});
