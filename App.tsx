import { StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Menu from "./screens/Menu";
import Game from "./screens/Game";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();
const dimensions = Dimensions.get("window");

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" options={{ headerShown: false }}>
            {({ navigation }) => (
              <Welcome
                navigation={navigation}
                scene={{ height: dimensions.height, width: dimensions.width }}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Menu" options={{ headerShown: false }}>
            {({ navigation }) => <Menu navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "orange",
    marginTop: 20,
  },
});
