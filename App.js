import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const screenOptions = {
  headerShown: false
}

const App = () => {
  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
