import { Text } from '@ui-kitten/components';
import React from 'react';
import { TextProps } from 'react-native';

interface MiikaTextProps {
  text: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  category?: string;
  width?: number | string;
}

export const MiikaText: React.FC<MiikaTextProps & TextProps> = ({
  text,
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  width = undefined,
  category = 'p1',
  ...props
}) => {
  // NOT RESPONSIVE
  return (
    <Text
      category={category}
      style={{
        marginBottom,
        marginTop,
        marginLeft,
        width,
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
