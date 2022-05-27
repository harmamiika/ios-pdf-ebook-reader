import React from 'react';
import { CustomIonIcon } from '../reusable/CustomIonIcon';

export const LibraryIcon = ({ navigation }: { navigation: any }) => {
  return (
    <CustomIonIcon
      name="library-outline"
      onPress={() => navigation.navigate('Library')}
    />
  );
};
