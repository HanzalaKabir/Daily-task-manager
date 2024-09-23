import { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { AppScreens } from "../utils/constants";

export const AddTaskScreen = ({ onAddTask, changeScreen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (
      !title ||
      title.trim() === "" ||
      !description ||
      description.trim() === ""
    ) {
      Alert.alert(
        "Please enter both title and description",
        "Fill data submit again"
      );
    }
    const newTask = {
      title,
      description,
      date: new Date().toLocaleString(),
      isComplete: false,
      id: Date.now(),
    };
    onAddTask(newTask);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            changeScreen(AppScreens.HomeScreen);
          }}
        />
        <Appbar.Content title="Add New Task" />
      </Appbar.Header>
      {/* <Chip
        mode="flat"
        icon={"application-edit-outline"}
        textStyle={{ fontSize: 20 }}
        style={styles.heading}
      ></Chip> */}
      <TextInput
        style={styles.input}
        label="Title"
        mode="outlined"
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        multiline
        //android
        numberOfLines={5}
        style={styles.input}
        label="Description"
        mode="outlined"
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button onPress={handleSubmit}>Add Task</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    marginVertical: 10,
    padding: 5,
  },
  heading: {
    padding: 5,
  },
});
