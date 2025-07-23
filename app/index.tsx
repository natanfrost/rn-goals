import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { Button, FlatList, StatusBar, StyleSheet, View } from "react-native";

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

  const handleCloseGoalModal = () => {
    setGoalModalVisible(false);
  };

  const handleAddGoal = (goal: string) => {
    const newGoal: Goal = { id: Math.random().toString(), title: goal };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setGoalModalVisible(false);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Button
          title="Add new goal"
          color="#a870f1"
          onPress={handleOpenGoalModal}
        />
        <GoalInput
          open={goalModalVisible}
          onAddGoal={handleAddGoal}
          onCancel={handleCloseGoalModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem item={{ ...item, onDeleteItem: handleDeleteGoal }} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
