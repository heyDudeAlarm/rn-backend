import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CustomRow from "./RecordList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const RecordListView = (props) => (
  <View style={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.itemList}
      renderItem={props.renderItem}
    />
  </View>
);

export default RecordListView;
