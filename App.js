import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ReminderInput from './components/ReminderInput.js';
import ReminderItem from './components/ReminderItem.js';

export default function App() {
  const [reminders, setReminders] = useState([]);
  const [countReminders, setCountReminders] = useState(0);

  const addReminder = (reminder) => {
    setCountReminders(countReminders + 1);
    setReminders((reminders) => [
      { key: countReminders.toString(), value: reminder },
      ...reminders,
    ]);
  };

  const deleteReminder = (keyDeleted) => {
    setReminders((currentReminders) => {
      return currentReminders.filter((reminder) => {
        return reminder.key !== keyDeleted;
      });
    });
  };

  return (
    <View style={styles.container}>
      <ReminderInput addReminder={addReminder} />
      <View style={{ width: '80%', alignSelf: 'center' }}>
        <FlatList
          data={reminders}
          renderItem={(reminder) => (
            <ReminderItem
              reminder={reminder.item.value}
              deleteReminder={deleteReminder}
              keyToDelete={reminder.item.key}
            />
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
});
