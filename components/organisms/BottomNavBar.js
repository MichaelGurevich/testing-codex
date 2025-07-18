import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NavItem from '../molecules/NavItem';

const items = [
  { key: 'home', icon: 'home' },
  { key: 'search', icon: 'search' },
  { key: 'reels', icon: 'film' },
  { key: 'shop', icon: 'shopping-bag' },
  { key: 'profile', icon: 'user' },
];

export default function BottomNavBar() {
  const [selected, setSelected] = useState('home');

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <NavItem
          key={item.key}
          icon={item.icon}
          selected={selected === item.key}
          onPress={() => setSelected(item.key)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
});
