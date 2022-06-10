import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  onPress?: () => void;
}

export const CustomIonIcon: React.FC<Props> = ({ name, onPress, ...props }) => (
  <IonIcon name={name} size={20} onPress={onPress} {...props} />
);
