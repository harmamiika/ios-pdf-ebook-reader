import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../reusable/StyledText';

interface ParagraphProps {
  title: string;
  text?: string;
}

export default function Paragraph({
  title,
  text,
  children,
}: React.PropsWithChildren<ParagraphProps>) {
  return (
    <View style={{ marginTop: 5 }}>
      <StyledText
        category="h6"
        text={title}
        marginBottom={5}
        numberOfLines={undefined}
      />
      {text && (
        <StyledText category="p1" text={text} numberOfLines={undefined} />
      )}
      {children}
    </View>
  );
}
