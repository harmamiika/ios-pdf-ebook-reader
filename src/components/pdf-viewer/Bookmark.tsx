import React from 'react';
import { StyleSheet } from 'react-native';
import { CustomIonIcon } from '../reusable/CustomIonIcon';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';

export default function Bookmark() {
  return <CustomIonIcon name="bookmark" size={40} style={styles.icon} />;
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 20,
    top: -10,
  },
});
