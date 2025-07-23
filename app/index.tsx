import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

interface Goal {
  id: string;
  title: string;
}

export default function HomeScreen() {
  const [goalModalVisible, setGoalModalVisible] = useState(false);
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleOpenGoalModal = () => {
    setGoalModalVisible(true);
  };

  const handleAddGoal = (goal: string) => {
    const newGoal: Goal = { id: Math.random().toString(), title: goal };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add new goal"
        color="#5e0acc"
        onPress={handleOpenGoalModal}
      />
      <GoalInput open={goalModalVisible} onAddGoal={handleAddGoal} />
      <View>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem item={{ ...item, onDeleteItem: handleDeleteGoal }} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
