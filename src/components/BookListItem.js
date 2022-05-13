import React from 'react';
import { Text } from 'react-native';
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

  return <Text onPress={onItemPress}>{book.name}</Text>;
}
