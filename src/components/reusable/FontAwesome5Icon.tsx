import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface FontAwesome5IconProps {
  name: string;
  color?: string;
  size?: number;
  onPress?: () => void;
  style?: any;
}

export const FontAwesome5Icon = ({
  name,
  color,
  style,
  size,
  onPress,
}: FontAwesome5IconProps) => (
  <FontAwesome5
    name={name}
    onPress={onPress}
    size={size || 20}
    color={color}
    style={style}
  />
);
