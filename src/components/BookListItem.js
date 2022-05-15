import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setActiveBook } from '../state/booksSlice';

// const createBook = file => ({
//   id: uuidv4(),
//   name: file.fileName,
//   // huom
//   file,

//   currentPage: 1,

//   // get form file
//   totalPages: 0,

//   startDate: new Date(),
//   finishDate: undefined,

//   bookmarks: [],
// });

export default function BookListItem({ book }) {
  const dispatch = useDispatch();

  console.log(book, 'book item');

  const onItemPress = () => {
    console.log('press');
    dispatch(setActiveBook(book));
  };

  return (
    <View style={styles.sectionContainer}>
      <Text onPress={onItemPress}>{book.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
