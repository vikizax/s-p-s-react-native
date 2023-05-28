import { useEffect, useState, useRef } from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import FAIcon from "@expo/vector-icons/FontAwesome";
import FA5Icon from "@expo/vector-icons/FontAwesome5";
import { getConfig } from "../utility";

interface AnimatedHandProps {
  height: number;
  width: number;
}
const START_Y_POSITION = -50;
const HAND_TYPE = [
  "hand-paper-o",
  "hand-rock-o",
  "hand-scissors-o",
  "hand-o-right",
  "hand-o-left",
  "hand-lizard-o",
  "handshake-o",
  "hand-middle-finger",
];
const AnimatedHand = (scene: AnimatedHandProps) => {
  const [config, setConfig] = useState(() => getConfig(HAND_TYPE));

  const animatedY = useRef(new Animated.Value(START_Y_POSITION)).current;
  const animatedRotation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    animatedY.setValue(START_Y_POSITION);
    animatedRotation.setValue(0);

    // rotation
    Animated.loop(
      Animated.timing(animatedRotation, {
        toValue: 1,
        duration: config.rotateDuration,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();

    // fall + delay
    Animated.sequence([
      Animated.delay(config.fallDelay),
      Animated.timing(animatedY, {
        toValue: scene.height,
        easing: Easing.linear,
        useNativeDriver: true,
        duration: config.fallDuration,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        const newConfig = getConfig(HAND_TYPE);
        setConfig(newConfig);
      }
    });
  };

  useEffect(() => {
    if (config) startAnimation();
  }, [config]);

  const rotate = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: config.raotateDirection
      ? ["0deg", "360deg"]
      : ["360deg", "0deg"],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          left: config.xPosition,
          opacity: config.opacity,
          transform: [
            {
              translateY: animatedY,
            },
            { rotateZ: rotate },
          ],
        },
      ]}
    >
      {config.type === "hand-middle-finger" ? (
        <FA5Icon name={config.type as any} size={config.size} stoke="white"/>
      ) : (
        <FAIcon name={config.type as any} size={config.size} />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});

export default AnimatedHand;
