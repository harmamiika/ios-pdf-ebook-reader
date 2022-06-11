import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  onPress?: () => void;
  color?: string;
  size?: number;
  style?: any;
}

export const CustomIonIcon: React.FC<Props> = ({
  name,
  onPress,
  size = 20,
  color = undefined,
  style,
  ...props
}) => (
  <IonIcon
    name={name}
    size={size}
    color={color}
    onPress={onPress}
    style={style}
    {...props}
  />
);
