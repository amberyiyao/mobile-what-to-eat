import { Text, View } from "react-native";
import { theme } from "../../constants/theme";

export default function Header() {
  return (
    <View
      style={{
        height: 400,
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: theme.light.primaryColor,
          height: 800,
          width: 800,
          position: "absolute",
          borderRadius: 10000,
          bottom: 0,
          right: -0,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          top: 18,
          left: "5%",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          New Food
        </Text>
      </View>
    </View>
  );
}
