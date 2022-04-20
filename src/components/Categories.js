import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";


export default function Categories({term,setTerm,commonItems}) {
  return (
    <FlatList
        data={commonItems}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            url={item.url}
            index={index}
            active={term === item.name}
            handlePress={() => setTerm(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
  )
}
