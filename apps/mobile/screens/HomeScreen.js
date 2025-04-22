
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import InvoiceCard from '../components/InvoiceCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ChatBubble from '../components/ChatBubble';

export default function HomeScreen() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInvoices([
        { id: '101', amount: 2400, status: 'Pending' },
        { id: '102', amount: 1850, status: 'Paid' },
        { id: '103', amount: 400, status: 'Overdue' }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Welcome to G-Invoicing
      </Text>

      <ChatBubble message="Hello, how can I help with your invoice today?" isUser={false} />
      <ChatBubble message="Show me my latest invoices." isUser={true} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <FlatList
          data={invoices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <InvoiceCard invoice={item} />}
        />
      )}
    </SafeAreaView>
  );
}
