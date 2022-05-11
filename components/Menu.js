import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import FilePicker from './FilePicker';

export default function Menu() {
  return (
    <SafeAreaView>
      <Text>Menu</Text>
      <FilePicker />
    </SafeAreaView>
  );
}
