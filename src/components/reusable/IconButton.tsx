import { IconProps, useTheme } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  headerIconsize,
  screenHeight,
  screenWidth,
} from '../../utils/cssHelpers';
import { CustomIonIcon } from './CustomIonIcon';
import { FontAwesome5Icon } from './FontAwesome5Icon';
import { FontAwesomeIcon } from './FontAwesomerIcon';

interface IconButtonProps {
  onPress: () => any;
  iconType: IconType;
  iconName: string;
}

export enum IconType {
  IonIcon,
  FontAwesome5Icon,
  FAIcon,
}

export function IconButton({
  onPress,
  iconName,
  iconType,
  // iconColor,
  iconSize,
  ...opacityProps
}: IconProps & IconButtonProps) {
  const theme = useTheme();
  const iconColor = theme['text-basic-color'];

  const renderIcon = () => {
    if (iconType === IconType.IonIcon)
      return (
        <CustomIonIcon
          name={iconName}
          size={iconSize ? iconSize : headerIconsize}
          color={iconColor}
        />
      );
    else if (iconType === IconType.FontAwesome5Icon)
      return (
        <FontAwesome5Icon
          name={iconName}
          size={iconSize ? iconSize : headerIconsize}
          color={iconColor}
        />
      );
    else if (iconType === IconType.FAIcon)
      return (
        <FontAwesomeIcon
          name={iconName}
          size={iconSize ? iconSize : headerIconsize}
          color={iconColor}
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
