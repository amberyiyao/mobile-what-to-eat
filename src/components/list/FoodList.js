import { Text, View, ScrollView, FlatList, Image } from "react-native";
import { theme } from "../../constants/theme";
import { foodList } from "../../mock/foodList";
import { LinearGradient } from "expo-linear-gradient";

function FoodListItem({ item }) {
  //   console.log(props);
  return (
    <View
      style={{
        position: "relative",
        height: 150,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: "flex-end",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
      }}
    >
      <Image
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          borderRadius: 10,
          bottom: 0,
        }}
        source={{ uri: item.img }}
      />
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]}
        style={{
          position: "absolute",
          top: 20,
          left: 0,
          right: 0,
          borderRadius: 10,
          bottom: 0,
        }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontFamily: "Poppins_300Light",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
}

export default function FoodList() {
  return (
    <View
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: 30,
        flex: 1,
      }}
    >
      <FlatList
        data={foodList}
        renderItem={FoodListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
