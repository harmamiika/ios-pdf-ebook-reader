import React from 'react';
import { View } from 'react-native';
import { FilePicker } from '../header/FilePicker';
import { FontAwesomeIcon } from '../reusable/FontAwesomerIcon';
import { IconButton, IconType } from '../reusable/IconButton';

interface Props {
  navigation: any;
}

export default function LibraryRightHeader({ navigation }: Props) {
  const gap = 12;

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
      }}>
      <View style={childStyle}>
        <FilePicker />
      </View>

      <IconButton
        name="folder-open-o"
        iconType={IconType.FAIcon}
        style={childStyle}
      />

      <IconButton
        name="bars"
        onPress={() => navigation.navigate('Menu')}
        iconType={IconType.FontAwesome5Icon}
        style={childStyle}
      />
    </View>
  );
}
