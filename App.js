import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  const [reminder, setReminder] = useState();
  const [reminders, setReminders] = useState([]);

  const getReminder = (reminder) => {
    setReminder(reminder);
  };

  const addReminder = () => {
    setReminders((reminders) => [reminder, ...reminders]);
    setReminder('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder='Lembrar...'
          style={styles.textInput}
          onChangeText={getReminder}
          value={reminder}
        />

        <View style={styles.inputButton}>
          <Button title='+' onPress={addReminder} />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        {reminders.map((reminder, key) => (
          <View style={styles.item}>
            <Text key={key}>{reminder}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 50,
  },
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
  item: {
    width: '80%',
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
});
