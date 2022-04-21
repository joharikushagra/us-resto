import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({ term }) {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size="large" marginVertical={30} color='rgb(241,186,87)' />;

  return (
    <View style={styles.container}>
      <Text style={styles.headers}>{!error ? "Top Restaurants" : error}</Text>
      {data && (
        <FlatList
          data={data}
          keyExtractor={(restaurant) => restaurant.id}
          renderItem={({ item }) => <RestaurantItem restaurant={item}/>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    // flex: 1,
  },
  headers: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    // height: 100,
  },
});
