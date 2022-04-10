import { Text, View, TouchableOpacity } from "react-native";
import { fonts, theme } from "../../constants/theme";

export default function Header({ navigation }) {
  const goToAddNew = () => {
    navigation.navigate("AddFood");
  };
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
          top: 18,
          left: "5%",
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
        <TouchableOpacity
          style={{
            position: "relative",
            // top: 6,
            backgroundColor: theme.light.primaryColor,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 2,
            paddingBottom: 2,
          }}
          onPress={goToAddNew}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.Poppins_300Light,
              position: "relative",
              top: 2,
            }}
          >
            + New
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
