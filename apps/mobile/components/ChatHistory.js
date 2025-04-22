
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function ChatHistory({ history }) {
  return (
    <ScrollView style={{ maxHeight: 300 }}>
      {history.map((item, index) => (
        <View key={index} style={item.isUser ? styles.user : styles.bot}>
          <Text>{item.message}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    margin: 5,
    padding: 10,
    borderRadius: 5
  },
  bot: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEE',
    margin: 5,
    padding: 10,
    borderRadius: 5
  }
});
