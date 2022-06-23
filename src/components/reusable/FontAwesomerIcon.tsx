import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface FontAwesomeIconProps {
  name: string;
  onPress?: () => void;
  color?: string;
  size?: number;
  style?: any;
}

export const FontAwesomeIcon = ({
  name,
  color,
  style,
  size,
  onPress,
  ...props
}: FontAwesomeIconProps) => (
  <FontAwesome
    name={name}
    onPress={onPress}
    size={size || 20}
    color={color}
    style={style}
    {...props}
  />
);
