import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function IconButton({ onPress, children, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
}
