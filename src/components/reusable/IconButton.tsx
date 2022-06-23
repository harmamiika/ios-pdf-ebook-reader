import React from 'react';
import { Button, IconProps } from '@ui-kitten/components';
import { CustomIonIcon } from './CustomIonIcon';
import { StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome5Icon } from './FontAwesome5Icon';
import {
  headerIconsize,
  screenHeight,
  screenWidth,
} from '../../utils/cssHelpers';
import { FontAwesomeIcon } from './FontAwesomerIcon';

interface IconButtonProps {
  onPress: () => any;
  iconType: IconType;
}

export enum IconType {
  IonIcon,
  FontAwesome5Icon,
  FAIcon,
}

export function IconButton({
  onPress,
  name,
  iconType,
  iconColor,
  iconSize,
  ...opacityProps
}: IconProps & IconButtonProps) {
  const renderIcon = () => {
    if (iconType === IconType.IonIcon)
      return (
        <CustomIonIcon
          name={name}
          size={iconSize ? iconSize : headerIconsize}
          color={iconColor}
        />
      );
    else if (iconType === IconType.FontAwesome5Icon)
      return (
        <FontAwesome5Icon
          name={name}
          size={iconSize ? iconSize : headerIconsize}
        />
      );
    else if (iconType === IconType.FAIcon)
      return (
        <FontAwesomeIcon
          name={name}
          size={iconSize ? iconSize : headerIconsize}
        />
      );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.opacity}
      {...opacityProps}>
      {renderIcon()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  opacity: {
    // backgroundColor: 'red',
    height: screenHeight / 25,
    width: screenWidth / 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
