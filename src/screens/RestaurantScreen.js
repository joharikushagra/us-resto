import { View, Text, FlatList, Image, StyleSheet,Dimensions } from "react-native";
import { useEffect } from "react";
import useRestaurant from "../hooks/useRestaurant";

function RestaurantScreen({ navigation }) {
  const id = navigation.getParam("id");
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  const dimensions = Dimensions.get('window');
  const imageWidth = dimensions.width
  const imageHeight = Math.round((dimensions.width * 9)/16);
  useEffect(() => {
    searchRestaurant(id);
  }, []);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  return (
    <View>
      <FlatList
        data={data?.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <Image style={{width:imageWidth,height:imageHeight}} source={{ uri: item }} />}
      />
    </View>
  );
}



export default RestaurantScreen;
