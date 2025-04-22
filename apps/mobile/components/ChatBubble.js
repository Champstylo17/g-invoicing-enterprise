
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubble({ message, isUser }) {
  return (
    <View style={[styles.bubble, isUser ? styles.user : styles.bot]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
    maxWidth: '80%'
  },
  user: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end'
  },
  bot: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-start'
  },
  text: {
    fontSize: 16
  }
});
