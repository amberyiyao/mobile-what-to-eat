import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons";

import Home from "./src/screens/Home";
import { theme } from "./src/constants/theme";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_200ExtraLight,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AddFood from "./src/screens/AddFood";
import List from "./src/screens/List";

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

const AddStack = createStackNavigator();
function AddStackStackScreen() {
  return (
    <AddStack.Navigator
      initialRouteName="AddPage"
      screenOptions={{ headerShown: false }}
    >
      <AddStack.Screen name="AddPage" component={AddFood} />
    </AddStack.Navigator>
  );
}

const ListStack = createStackNavigator();
function ListStackStackScreen() {
  return (
    <ListStack.Navigator
      initialRouteName="FoodList"
      screenOptions={{ headerShown: false }}
    >
      <ListStack.Screen name="FoodList" component={List} />
    </ListStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_500Medium,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: { height: 60 } }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    paddingTop: 10,
                    paddingLeft: 20,
                    position: "relative",
                  }}
                >
                  <AntDesign
                    name="home"
                    size={30}
                    color={focused ? "black" : "gray"}
                    style={{
                      zIndex: 1,
                    }}
                  />
                  {focused ? (
                    <AntDesign
                      name="home"
                      size={30}
                      color={focused ? theme.light.primaryColor : "gray"}
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 22,
                      }}
                    />
                  ) : null}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddStackStackScreen}
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
        <Tab.Screen
          name="List"
          component={ListStackStackScreen}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    paddingTop: 10,
                    paddingRight: 20,
                    position: "relative",
                  }}
                >
                  <Feather
                    name="list"
                    size={30}
                    color={focused ? "black" : "gray"}
                    style={{
                      zIndex: 1,
                    }}
                  />
                  {focused ? (
                    <Feather
                      name="list"
                      size={30}
                      color={focused ? theme.light.primaryColor : "gray"}
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 18,
                      }}
                    />
                  ) : null}
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
