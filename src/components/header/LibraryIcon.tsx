import React from 'react';
import { View } from 'react-native';
import { IconButton, IconType } from '../reusable/IconButton';

export const LibraryIcon = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ marginTop: -1 }}>
      <IconButton
        iconName="library-outline"
        onPress={() => navigation.navigate('Library')}
        iconType={IconType.IonIcon}
      />
    </View>
  );
};
