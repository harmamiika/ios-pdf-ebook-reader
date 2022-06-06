import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface FontAwesome5IconProps {
  name: string;
  color?: string;
  onPress?: () => void;
  style?: any;
}

export const FontAwesome5Icon = ({
  name,
  color,
  style,
  onPress,
}: FontAwesome5IconProps) => (
  <FontAwesome5
    name={name}
    onPress={onPress}
    size={20}
    color={color}
    style={style}
  />
);
