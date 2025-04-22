
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadInvoiceScreen() {
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
    if (result.type === 'success') {
      setFile(result);
      // upload logic here
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Upload Invoice PDF" onPress={pickDocument} />
      {file && <Text>Selected: {file.name}</Text>}
    </View>
  );
}
