import { useState, useEffect, useCallback } from "react";
import { Text, View, Image } from "react-native";
import { theme } from "../../constants/theme";
// import { foodList } from "../../mock/foodList";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
// import {  } from "react/cjs/react.development";
let iconTimmer = null;
let iconIndexSave = 0;
export default function Loading() {
  const [iconIndex, setIconIndex] = useState(0);
  const icons = [
    <MaterialCommunityIcons
      name="food-apple-outline"
      size={50}
      color="black"
    />,
    <MaterialCommunityIcons
      name="food-drumstick-outline"
      size={50}
      color="black"
    />,
    <MaterialCommunityIcons
      name="fruit-grapes-outline"
      size={50}
      color="black"
    />,
    <MaterialIcons name="set-meal" size={50} color="black" />,
  ];
  const cancelIconTimmer = () => {
    if (iconTimmer) {
      clearTimeout(iconTimmer);
      iconTimmer = null;
    }
  };
  useEffect(() => {
    const setIconTimmer = () => {
      iconTimmer = setTimeout(() => {
        const newIconIndex =
          iconIndexSave === icons.length - 1 ? 0 : iconIndexSave + 1;
        iconIndexSave = newIconIndex;
        setIconIndex(newIconIndex);
        setIconTimmer();
      }, 150);
    };
    setIconTimmer();

    return cancelIconTimmer;
  }, []);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 100,
          padding: 20,
        }}
      >
        {icons[iconIndex]}
      </View>
    </View>
  );
}
