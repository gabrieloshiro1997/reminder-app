import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const ReminderItem = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => props.deleteReminder(props.keyToDelete)}
    >
      <View style={styles.item}>
        <Text>{props.reminder}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default ReminderItem;
