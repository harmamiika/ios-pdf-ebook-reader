import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { MiikaText } from '../reusable/MiikaText';

interface ThumbnailImageProps {
  book: IBook;
}

// todo: backup image

export default function ThumbnailImage({ book }: ThumbnailImageProps) {
  console.log(book.thumbnail, 'humb');

  if (!book.thumbnail.uri) {
    return (
      <View>
        <MiikaText text="no thumbnail" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: book.thumbnail.uri,
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    // flex: 1,
  },
  container: {
    height: '90%',
    width: 150,
    // marginRight: 500,
  },
});
