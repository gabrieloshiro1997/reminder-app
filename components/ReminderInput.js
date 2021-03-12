import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ReminderInput = (props) => {
  const [reminder, setReminder] = useState('');

  const getReminder = (reminder) => {
    setReminder(reminder);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        placeholder='Lembrar...'
        style={styles.textInput}
        onChangeText={getReminder}
        value={reminder}
      />

      <View style={styles.inputButton}>
        <Button
          title='+'
          onPress={() => {
            props.addReminder(reminder);
            setReminder('');
          }}
        />
      </View>
    </View>
  );
};

export default ReminderInput;

const styles = StyleSheet.create({
  inputView: { alignItems: 'center', marginBottom: 16 },
  textInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: 'center',
  },
  inputButton: {
    width: '80%',
  },
});
