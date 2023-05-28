import { View, Text, StyleSheet } from "react-native";

const Game = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2ce",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "orange",
    marginTop: 20,
  },
});

export default Game;
