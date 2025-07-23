import { Pressable, StyleSheet, Text, View } from "react-native";

interface GoalItemProps {
  item: {
    id: string;
    title: string;
    onDeleteItem: (id: string) => void;
  };
}

const GoalItem = ({ item }: GoalItemProps) => {
  const { id, title, onDeleteItem } = item;
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={styles.goalText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    textAlign: "center",
  },
});
