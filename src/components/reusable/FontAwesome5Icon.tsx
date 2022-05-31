import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const FontAwesome5Icon = ({
  name,
  onPress,
}: {
  name: string;
  onPress: () => void;
}) => <FontAwesome5 name={name} onPress={onPress} size={20} />;
