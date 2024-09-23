import { StyleSheet, View, Text } from "react-native";
import { Button, Card, Chip } from "react-native-paper";

export const TaskItem = ({
  title,
  description,
  id,
  isComplete,
  onComplete,
  onDelete,
}) => {
  return (
    <Card style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Card.Title title={title} />
        {isComplete && (
          <Chip
            style={styles.chip}
            icon={"calendar-multiple-check"}
            mode="outlined"
          >
            Task Done
          </Chip>
        )}
      </View>
      <Card.Content>
        <Text variant="titleLarge ">{description}</Text>
      </Card.Content>
      <Card.Actions
        style={{
          width: "100%",
          display: "flex",
          ...styles.padding,
        }}
      >
        <Button style={{ marginRight: "auto" }} onPress={() => onDelete(id)}>
          Delete
        </Button>
        <Button onPress={() => onComplete(id)}>Complete</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  padding: {
    padding: 12,
  },
  card: {
    margin: 10,
    elevation: 10,
  },
  chip: {
    marginLeft: "auto", // Push the chip to the right side
  },
});
