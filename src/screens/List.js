import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodList from "../components/list/FoodList";
import Header from "../components/list/Header";

export default function List({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <FoodList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
