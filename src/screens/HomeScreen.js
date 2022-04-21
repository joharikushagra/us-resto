import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View,StyleSheet } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import Categories from "../components/Categories";
export default function HomeScreen() {
  const [term, setTerm] = useState("Burger");
  const commonItems = [
    {
      name: "Burger",
      url: require("../assets/burger.png"),
    },
    {
      name: "Cake",
      url: require("../assets/cake.png"),
    },
    {
      name: "Pasta",
      url: require("../assets/pasta.png"),
    },
    {
      name: "Pizza",
      url: require("../assets/pizza.png"),
    },
    {
      name: "Drinks",
      url: require("../assets/smoothies.png"),
    },
    {
      name: "Steak",
      url: require("../assets/steak.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories term={term} setTerm={setTerm} commonItems={commonItems} />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(253,253,253) ",
      // alignItems: "center",
      // justifyContent: "center",
    },
  });