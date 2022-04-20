import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem({
  name,
  url,
  index,
  active,
  handlePress,
}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index == 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active
            ? { backgroundColor: "rgb(241,186,87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={url} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    // backgroundColor: "rgb(281,186,87)",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
