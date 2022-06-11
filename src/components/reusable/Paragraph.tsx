import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ParagraphProps {
  text: string;
  marginTop?: number;
  marginBottom?: number;
  category?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  text,
  marginBottom = 0,
  marginTop = 0,
  category = 'p1',
  ...props
}) => {
  // NOT RESPONSIVE
  return (
    <Text
      category={category}
      style={{
        marginBottom: marginBottom,
        marginTop: marginTop,
      }}
      {...props}>
      {text}
    </Text>
  );
};

// const s = StyleSheet.create({
//   paragraph: {
//     marginBottom: marginBottom,
//     marginTop: marginTop,
//   },
// });
