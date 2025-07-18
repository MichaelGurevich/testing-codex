import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconButton from '../atoms/IconButton';

export default function NavItem({ icon, onPress, selected }) {
  const color = selected ? '#000' : '#555';

  return (
    <IconButton onPress={onPress} style={styles.container}>
      <Feather name={icon} size={24} color={color} />
    </IconButton>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
