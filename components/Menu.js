import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import FilePicker from './FilePicker';
import { useDispatch, useSelector } from 'react-redux';
import BookListItem from './BookListItem';

export default function Menu() {
  const dispatch = useDispatch();
  const { bookList } = useSelector(state => state.books);

  return (
    <SafeAreaView>
      <Text>Menu</Text>

      {bookList.map(b => (
        <BookListItem book={b} />
      ))}

      <FilePicker />
    </SafeAreaView>
  );
}
