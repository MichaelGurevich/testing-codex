import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavBar from './components/organisms/BottomNavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content} />
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});
