import { FlatList, StyleSheet, View } from "react-native";
import { TaskItem } from "../components/TaskItem";
import { Chip } from "react-native-paper";
import { AppScreens } from "../utils/constants";

export const HomeScreen = ({
  tasks,
  onTaskDelete,
  onTaskComplete,
  changeScreen,
}) => {
  return (
    <View style={styles.container}>
      <Chip
        icon={"plus"}
        style={{ padding: 4, marginTop: 15, marginHorizontal: 10 }}
        onPress={() => changeScreen(AppScreens.AddTaskScreen)}
      >
        Add New Task
      </Chip>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={(iter) => (
          <TaskItem
            date={iter.item.date}
            title={iter.item.title}
            description={iter.item.description}
            id={iter.item.id}
            isComplete={iter.item.isComplete}
            onComplete={(id) => {
              onTaskComplete(id);
            }}
            onDelete={() => {
              onTaskDelete("onDelete called");
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures HomeScreen takes the full height of its parent
  },
});
