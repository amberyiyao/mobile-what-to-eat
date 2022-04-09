import { Text, View } from "react-native";
import { theme } from "../../constants/theme";

export default function Header() {
  return (
    <View
      style={{
        height: 100,
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
          right: -0,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          bottom: 15,
          left: "5%",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Food List
        </Text>
      </View>
    </View>
  );
}
