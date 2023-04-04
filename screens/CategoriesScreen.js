import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
// import { CATEGORIES } from "../data/dummy-data";
import useFetch from "../hook/useFetch";

export default function CategoriesScreen({ navigation }) {
  const { data: CATEGORIES } = useFetch("categories", {});
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
