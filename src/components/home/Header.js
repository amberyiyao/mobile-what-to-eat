// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/theme";

export default function Header() {
  return (
    <View
      style={{
        height: 200,
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: theme.light.primaryColor,
          height: 600,
          width: 600,
          position: "absolute",
          borderRadius: 10000,
          bottom: 0,
          right: -30,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          left: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontFamily: "Poppins_200ExtraLight",
            }}
          >
            Hi,{" "}
          </Text>
          <Text
            style={{
              fontSize: 35,
              //   fontWeight: "bold",
              fontFamily: "Poppins_500Medium",
            }}
          >
            Amber
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "Poppins_200ExtraLight",
            fontSize: 18,
            marginTop: -10,
          }}
        >
          What do you want to eat today?
        </Text>
      </View>
    </View>
  );
}
