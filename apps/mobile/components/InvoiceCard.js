
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InvoiceCard({ invoice }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Invoice #{invoice.id}</Text>
      <Text>Amount: ${invoice.amount}</Text>
      <Text>Status: {invoice.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    marginVertical: 10,
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
