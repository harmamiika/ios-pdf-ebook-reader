import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const CustomIonIcon = ({ name, onPress }) => (
  <IonIcon name={name} size={20} onPress={onPress} />
);
