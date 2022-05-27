import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { MenuIcon } from './MenuIcon';
import { PlusIcon } from './PlusIcon';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';

interface LibraryRightHeaderProps {
  navigation: any;
}

export const LibraryRightHeader = ({ navigation }: LibraryRightHeaderProps) => {
  return (
    <View>
      <FontAwesome5Icon
        name="bars"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
};
