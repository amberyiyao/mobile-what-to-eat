// import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react/cjs/react.production.min";
import Header from "../components/pick/Header";
import Loading from "../components/pick/Loading";
import PickFoodCard from "../components/pick/PickFoodCard";
import { foodList } from "../mock/foodList";

let pickingFoodList = [...foodList];

export default function PickFood() {
  const [isPiking, setIsPicking] = useState(true);
  const [pickFoodIndex, setPickFoodIndex] = useState(0);

  const pickAFood = () => {
    setIsPicking(true);
    if (pickingFoodList.length === 0) {
      pickingFoodList = [...foodList];
    }
    const newFoodIndex = pickRandomNumber();
    setTimeout(() => {
      setIsPicking(false);
      setPickFoodIndex(newFoodIndex);
    }, 700);
  };

  const pickRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * pickingFoodList.length);
    return randomNumber;
  };

  const repickFood = () => {
    pickingFoodList.slice(pickFoodIndex, 1);
    pickAFood();
  };

  const likeThisFood = () => {};

  useEffect(() => {
    pickAFood();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <View style={{ position: "absolute", left: 0, right: 0, top: 0 }}>
          <Header />
        </View>
        {isPiking ? (
          <Loading />
        ) : (
          <View style={{ marginTop: 100 }}>
            <PickFoodCard
              pickedFood={foodList[pickFoodIndex]}
              repickFood={repickFood}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
