import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";
import { withNavigation } from "react-navigation";
function RestaurantItem({ restaurant, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}
    >
      <View style={[styles.container, styles.elevation]}>
        <Image style={styles.image} source={{ uri: restaurant.image_url }} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.price}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  price: {
    color: "gold",
  },
  elevation,
});

export default withNavigation(RestaurantItem);
