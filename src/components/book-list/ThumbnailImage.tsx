import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { exists } from 'react-native-fs';
import { useDispatch } from 'react-redux';
import { IBook } from '../../interfaces';
import { updateBook } from '../../state/booksSlice';
import { isTablet } from '../../utils/cssHelpers';
import { createThumbnail } from '../../utils/thumbnails';
import { MiikaText } from '../reusable/MiikaText';

interface ThumbnailImageProps {
  book: IBook;
}

// /tmp/com.app.librarian-Inbox/Ticket-Wien-Budapest-3022097197.pdf
export default function ThumbnailImage({ book }: ThumbnailImageProps) {
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   // create new image if original image is missing
  //   // this logic could be bad
  //   (async () => {
  //     if (book.thumbnail.originalUri) {
  //       const originalFileExists = await exists(book.thumbnail.originalUri);
  //       if (!originalFileExists) {
  //         const newThumbnail = await createThumbnail(book.copyFileUri);
  //         if (newThumbnail) {
  //           dispatch(updateBook({ ...book, thumbnail: newThumbnail }));
  //         }
  //       }
  //     }
  //   })();
  // }, [book.thumbnail.uri]);

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
    width: isTablet ? 225 : 150,
    borderWidth: 0.5,
    border: 1,
    borderColor: 'rgb(245, 245, 245)',
  },
});
