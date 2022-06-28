import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { MiikaText } from '../reusable/MiikaText';

interface ThumbnailImageProps {
  book: IBook;
}

// todo: backup image

export default function ThumbnailImage({ book }: ThumbnailImageProps) {
  // console.log(book.thumbnail, 'humb');

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
    flex: 1,
  },
  container: {
    height: '90%',
    width: 150,
    borderWidth: 0.5,
    border: 1,
    borderColor: 'rgb(245, 245, 245)',
  },
});
