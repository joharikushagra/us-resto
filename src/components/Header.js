import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>Delicious Meal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Header;
