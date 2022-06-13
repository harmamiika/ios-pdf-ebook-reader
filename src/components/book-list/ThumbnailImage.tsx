import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { MiikaText } from '../reusable/MiikaText';

interface ThumbnailImageProps {
  book: IBook;
}

// todo: backup image

export default function ThumbnailImage({ book }: ThumbnailImageProps) {
  if (!book.thumbnail.uri) {
    return (
      <View>
        <MiikaText text="no thumbnail" />
      </View>
    );
  }

  return (
    <Image
      source={{
        uri: book.thumbnail.uri,
      }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
