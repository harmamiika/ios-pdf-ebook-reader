import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { MiikaText } from '../reusable/MiikaText';

interface ThumbnailImageProps {
  book: IBook;
}

// todo: backup image

// /tmp/com.app.librarian-Inbox/Ticket-Wien-Budapest-3022097197.pdf

export default function ThumbnailImage({ book }: ThumbnailImageProps) {
  // console.log(book.thumbnail, 'humb');

  if (!book.thumbnail.uri) {
    return (
      <View>
        <MiikaText text="no thumbnail" />
      </View>
    );
  }

  // FOR WORKING STORED FILES - JUST USE TILDE AND CUT THE FILEPATH!!

  const uri = book.thumbnail.uri;
  const searchString = '/Library/Caches/';
  const indexOf = uri.indexOf(searchString);
  const uriSlice = uri.slice(indexOf);
  const returnUri = '~' + uriSlice;

  return (
    <View style={styles.container}>
      <Image
        source={{
          // uri: returnUri,
          uri: book.thumbnail.uri,
        }}
        style={styles.image}
      />
    </View>
  );
}

// '~/Library/Caches/Ticket-Wien-Budapest-3022097197-pdf-thumbnail-0-6919282611132667011.jpg'

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
