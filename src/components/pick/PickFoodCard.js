import { Text, View, Image, TouchableNativeFeedback } from "react-native";
import { fonts, theme } from "../../constants/theme";
import { foodList } from "../../mock/foodList";
import { AntDesign } from "@expo/vector-icons";

// const pickedFood = foodList[0];
export default function PickFoodCard({ pickedFood, repickFood }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "90%",
        marginLeft: "5%",
        height: 600,
        // marginTop: 30,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 1,
        // opacity: 0.5,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 420,
        }}
        source={{ uri: pickedFood.img }}
      />
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: fonts.Poppins_600SemiBold,
              fontSize: 20,
            }}
          >
            {pickedFood.name}
          </Text>
          {pickedFood.description && (
            <Text
              style={{
                fontFamily: fonts.Poppins_200ExtraLight,
                fontSize: 14,
              }}
            >
              {pickedFood.description}
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <TouchableNativeFeedback onPress={repickFood}>
              <View
                style={{
                  borderColor: theme.light.primaryColor,
                  borderWidth: 1.1,
                  padding: 15,
                  borderRadius: 100,
                  marginRight: 15,
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingBottom: 10,
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="frowno"
                  size={30}
                  color={theme.light.primaryColor}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: fonts.Poppins_500Medium,
                    marginLeft: 6,
                    position: "relative",
                    color: theme.light.primaryColor,
                    top: 3,
                  }}
                >
                  Skip
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View
            style={{
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <TouchableNativeFeedback>
              <View
                style={{
                  backgroundColor: theme.light.primaryColor,
                  padding: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 100,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="smileo" size={30} color="black" />
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: fonts.Poppins_500Medium,
                    marginLeft: 6,
                    position: "relative",
                    top: 3,
                  }}
                >
                  Pick!
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </View>
  );
}
