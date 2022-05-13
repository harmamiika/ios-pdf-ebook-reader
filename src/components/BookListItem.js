import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setActiveBook } from '../state/booksSlice';

// Type Book

// id
// name

// filename
// filepath

// page
// pagecount
// image

export default function BookListItem({ book }) {
  const dispatch = useDispatch();

  console.log(book, 'book item');

  const onItemPress = () => {
    console.log('press');
    dispatch(setActiveBook(book));
  };

  return <Text onPress={onItemPress}>{book.name}</Text>;
}
