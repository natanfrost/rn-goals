import { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { Button } from "react-native/Libraries/Components/Button";
import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";
import { View } from "react-native/Libraries/Components/View/View";

interface GoalInputProps {
  onAddGoal: (goal: string) => void;
  open: boolean;
}

const GoalInput = ({ onAddGoal, open = false }: GoalInputProps) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleInputChange = (text: string) => {
    setEnteredGoal(text);
  };

  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={handleInputChange}
          value={enteredGoal}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  textInput: {
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#5e0acc",
    padding: 10,
    borderRadius: 6,
    width: "80%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
