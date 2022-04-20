import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";
import Categories from "./src/components/Categories";
export default function App() {
  const [term, setTerm] = useState("Burger");
  const commonItems = [
    {
      name: "Burger",
      url: require("./src/assets/burger.png"),
    },
    {
      name: "Cake",
      url: require("./src/assets/cake.png"),
    },
    {
      name: "Pasta",
      url: require("./src/assets/pasta.png"),
    },
    {
      name: "Pizza",
      url: require("./src/assets/pizza.png"),
    },
    {
      name: "Drinks",
      url: require("./src/assets/smoothies.png"),
    },
    {
      name: "Steak",
      url: require("./src/assets/steak.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm}/>
      <Categories term={term} setTerm={setTerm} commonItems={commonItems}/>

      {/* <CategoryItem/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
