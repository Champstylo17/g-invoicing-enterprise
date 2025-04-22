
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { askGPT } from '../services/gptService';

export default function ChatInput({ onResponse }) {
  const [message, setMessage] = useState('');

  const send = async () => {
    const reply = await askGPT(message);
    onResponse({ message, reply });
    setMessage('');
  };

  return (
    <View>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Ask something..."
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Send" onPress={send} />
    </View>
  );
}
