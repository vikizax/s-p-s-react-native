import { useState } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import {
  Button,
  Text,
  Dialog,
  Portal,
  Paragraph,
  TextInput,
  Checkbox
} from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";

interface MenuProps {
  navigation: NavigationProp<any>;
}

const Menu = ({ navigation }: MenuProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const hideDialog = () => setVisible((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">MENU🤝</Text>
      <Button
        mode="elevated"
        onPress={() => navigation.navigate("Game")}
        style={styles.button}
      >
        Create Room
      </Button>
      <Button mode="elevated" onPress={hideDialog} style={styles.button}>
        Join Room
      </Button>
      <Button
        mode="elevated"
        onPress={() => BackHandler.exitApp()}
        style={styles.button}
      >
        Exit
      </Button>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Enter Room ID</Dialog.Title>
          <Dialog.Content>
            <TextInput mode="outlined" placeholder="Room ID" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Connect</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1ecec",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "orange",
    marginTop: 20,
  },
  button: {
    marginVertical: 12,
  },
});

export default Menu;
