import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = ({onStartGame}) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setselectedNumber] = useState("");

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
  };

  const handleConfirmation = () => {
    const newValue = parseInt(value);
    if (newValue === NaN || newValue <= 0 || newValue > 99) return;
    setConfirmed(true);
    setselectedNumber(newValue);
    setValue("");
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Start Game</Text>

          <Card newStyles={styles.inputContainer}>
            <Text style={styles.subtitle}>Choose a number</Text>
            <Input
              bluronSubmit
              autocapitalie="none"
              autoCorrect={false}
              keyboardType={"numeric"}
              maxLength={2}
              value={value}
              onChangeText={handleInput}
              style={{ color: "white" }}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.cleanButton}>
                <Button
                  style={{ backgroundColor: "red" }}
                  title="Clean"
                  onPress={handleResetInput}
                  color={colors.disableColor}
                />
              </View>
              <View style={styles.confirmStyle}>
                <Button
                  title="Confirm"
                  onPress={handleConfirmation}
                  color={colors.actionColor}
                />
              </View>
            </View>
          </Card>
          {confirmed && (
            <Card newStyles={styles.selectedNumber}>
              <Text style={{ color: "white" }}>Your number is:</Text>
              <Text
                style={{ color: "white", marginVertical: 20, fontSize: 35 }}
              >
                {selectedNumber}
              </Text>
              <View style={styles.confirmStyle}>
                <Button title="Start Game" color={colors.actionColor} onPress={()=> onStartGame(selectedNumber)}/>
              </View>
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  selectedNumber: {
    marginTop: 50,
    width: "50%",
  },
});
