import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import BookListItem from './book-list/BookListItem';

export default function Library() {
  const { bookList } = useSelector(state => state.books);

  return (
    <SafeAreaView>
      <ScrollView>
        {bookList.map(book => (
          <BookListItem book={book} key={book.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
