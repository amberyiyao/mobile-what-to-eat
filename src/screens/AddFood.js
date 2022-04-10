import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/add/Header";
import { AntDesign } from "@expo/vector-icons";

export default function AddFood() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: "relative",
          flex: 1,
        }}
      >
        <View style={{ position: "absolute", left: 0, right: 0, top: 0 }}>
          <Header />
        </View>
        <View
          style={{
            marginTop: 100,
            paddingLeft: "5%",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 400,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              //   opacity: 0.95,
              borderRadius: 10,
            }}
          >
            <AntDesign
              name="camerao"
              size={50}
              color="gray"
              style={{
                opacity: 0.5,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 14,
                fontFamily: "Poppins_500Medium",
              }}
            >
              Food Name
            </Text>
            <TextInput
              value="haha"
              style={{
                //   height: 100,
                width: "90%",
                backgroundColor: "white",
                marginTop: 5,
                padding: 10,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 10,
                fontSize: 18,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 14,
                fontFamily: "Poppins_500Medium",
              }}
            >
              Dscription
            </Text>
            <TextInput
              value="11"
              multiline
              numberOfLines={4}
              style={{
                width: "90%",
                backgroundColor: "white",
                marginTop: 5,
                padding: 10,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 10,
                fontSize: 18,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
