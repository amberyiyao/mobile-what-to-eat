import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Home from "./src/screens/Home";
import { theme } from "./src/constants/theme";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_200ExtraLight,
} from "@expo-google-fonts/poppins";

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="HomePage" component={Home} />
    </HomeStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_500Medium,
    Poppins_200ExtraLight,
    Poppins_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: { height: 70 } }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "",
            tabBarIcon: () => {
              return (
                <View
                  style={{
                    backgroundColor: theme.light.primaryColor,
                    width: 80,
                    height: 80,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    bottom: 15,
                    borderRadius: 100,
                  }}
                >
                  <AntDesign name="plus" size={34} color="black" />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
