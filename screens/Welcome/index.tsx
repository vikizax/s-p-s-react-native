import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";
import AnimatedHand from "./AnimatedHand";

interface WelcomeProps {
  navigation: NavigationProp<any>;
  scene: {
    height: number;
    width: number;
  };
}

const Welcome = ({ navigation, scene }: WelcomeProps) => {
  return (
    <View style={styles.container}>
      {Array(50)
        .fill(true)
        .map((_, index) => (
          <AnimatedHand {...scene} key={index} />
        ))}
      <View style={styles.startContainer}>
        <Button mode="elevated" onPress={() => navigation.navigate("Menu")}>
          START!
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  startContainer: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
