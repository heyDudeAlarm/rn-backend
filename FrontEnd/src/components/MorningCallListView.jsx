import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CustomRow from "./MorningCallList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MorningCallListView = ({ itemList }) => (
  <View style={styles.container}>
    <FlatList
      data={itemList}
      renderItem={({ item }) => (
        <CustomRow
          title={item.title}
          description={item.description}
          image_url={item.image_url}
        />
      )}
    />
  </View>
);

export default MorningCallListView;
