import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CustomRow from "./RecordList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const RecordListView = ({ itemList }) => (
  <View style={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={itemList}
      renderItem={({ item }) => (
        <CustomRow
          name={item.name}
          message={item.message}
          profile_img={item.profile_img}
        />
      )}
    />
  </View>
);

export default RecordListView;
