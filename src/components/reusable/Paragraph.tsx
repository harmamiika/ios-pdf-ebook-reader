import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ParagraphProps {
  text: string;
  marginTop?: number;
  marginBottom?: number;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  text,
  marginBottom = 0,
  marginTop = 0,
}) => {
  const s = StyleSheet.create({
    paragraph: {
      marginBottom: marginBottom,
      marginTop: marginTop,
    },
  });

  // NOT RESPONSIVE
  return (
    <Text category="p1" style={s.paragraph}>
      {text}
    </Text>
  );
};
