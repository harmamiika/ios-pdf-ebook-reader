import React from 'react';
import { View } from 'react-native';
import { FilePicker } from '../header/FilePicker';
import { FontAwesomeIcon } from '../reusable/FontAwesomerIcon';
import { IconButton, IconType } from '../reusable/IconButton';

interface Props {
  navigation: any;
}

export default function LibraryRightHeader({ navigation }: Props) {
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
      {/* <View style={childStyle}> */}
      <FilePicker />
      {/* </View> */}

      {/* <IconButton
        iconName="folder-open"
        iconType={IconType.FontAwesome5Icon}
        style={childStyle}
      /> */}

      <IconButton
        iconName="bars"
        onPress={() => navigation.navigate('Menu')}
        iconType={IconType.FontAwesome5Icon}
        style={{ ...childStyle, marginRight: 0 }}
      />
    </View>
  );
}
