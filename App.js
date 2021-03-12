import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from 'react-native';
import ReminderItem from './components/ReminderItem.js';

export default function App() {
  const [reminder, setReminder] = useState('');
  const [reminders, setReminders] = useState([]);
  const [countReminders, setCountReminders] = useState(0);

  const getReminder = (reminder) => {
    setReminder(reminder);
  };

  const addReminder = () => {
    setCountReminders(countReminders + 1);
    setReminders((reminders) => [
      { key: countReminders.toString(), value: reminder },
      ...reminders,
    ]);
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
      <View style={{ width: '80%', alignSelf: 'center' }}>
        <FlatList
          data={reminders}
          renderItem={(reminder) => (
            <ReminderItem reminder={reminder.item.value} />
          )}
        />
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
});
