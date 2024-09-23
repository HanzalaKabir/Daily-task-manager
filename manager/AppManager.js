import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { AppScreens } from "../utils/constants";
import { AddTaskScreen } from "../screens/AddTaskScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { dummyTasks } from "../utils/constants";

export const AppManager = () => {
  const [currentScreen, setCurrentScreen] = useState(AppScreens.HomeScreen);

  const [tasks, setTasks] = useState([...dummyTasks]);
  const handleTaskComplete = (id) => {
    //alert(id);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        // Update the key-value pair (isComplete in this case)
        return { ...task, isComplete: true };
      }
      return task; // Return other tasks unchanged
    });

    // Update the state with the new array of tasks
    setTasks(updatedTasks);
  };
  const handleTaskDelete = () => {
    alert("handleTaskDelete from app manager");
  };
  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
    setCurrentScreen(AppScreens.HomeScreen);
  };
  // console.log(tasks);
  return (
    <View style={styles.container}>
      {currentScreen === AppScreens.AddTaskScreen ? (
        <AddTaskScreen
          onAddTask={handleAddTask}
          changeScreen={(screenName) => setCurrentScreen(screenName)}
        />
      ) : (
        <HomeScreen
          tasks={tasks}
          onTaskDelete={handleTaskDelete}
          onTaskComplete={handleTaskComplete}
          changeScreen={(screenName) => setCurrentScreen(screenName)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures AppManager takes full screen height
  },
});
