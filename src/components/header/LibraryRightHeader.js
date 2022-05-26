import React from 'react';
import { View } from 'react-native';
import { MenuIcon } from './MenuIcon';
import { PlusIcon } from './PlusIcon';

export const LibraryRightHeader = () => {
  return (
    <View>
      <MenuIcon />
      <PlusIcon />
    </View>
  );
};
