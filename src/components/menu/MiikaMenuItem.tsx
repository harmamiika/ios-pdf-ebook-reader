import { Divider } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { screenHeight, sideMargin } from '../../utils/cssHelpers';
import { StyledText } from '../reusable/StyledText';

interface Props {
  text: string;
  onPress: () => void;
  iconType?: number;
}

export default function MiikaMenuItem({ text, onPress }: Props) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <StyledText text={text} category="h6" marginLeft={sideMargin} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight / 9,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
});
