import React from 'react';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';

export const BookIcon = ({ navigation }) => {
  // const onIconPress = () => navigation.navigate('PdfViewer') ;
  return (
    <FontAwesome5Icon
      name="book-open"
      onPress={() => navigation.navigate('PdfViewer')}
    />
  );
};
