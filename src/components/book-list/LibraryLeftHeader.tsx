import React from 'react';
import { View } from 'react-native';
import { IconButton, IconType } from '../reusable/IconButton';

interface Props {
  navigation: any;
}

export default function LibraryLeftHeader({ navigation }: Props) {
  const gap = 18;

  const childStyle = {
    marginHorizontal: gap / 2,
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: gap / -2,
        // paddingHorizontal: gap,
      }}>
      <IconButton
        iconName="ios-book-sharp"
        onPress={() => navigation.navigate('Reading view')}
        iconType={IconType.IonIcon}
        style={{ ...childStyle, marginLeft: 5 }}
      />
    </View>
  );
}
