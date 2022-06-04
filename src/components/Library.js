import { Divider, List, ListItem } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBook } from '../state/booksSlice';
import BookListItem from './BookListItem';
import { CustomIonIcon } from './reusable/CustomIonIcon';

export default function Library() {
  const dispatch = useDispatch();
  const { bookList, activeBook } = useSelector(state => state.books);

  const onItemPress = book => {
    dispatch(setActiveBook(book));
  };

  const renderBookListItem = ({ item }) => {
    return (
      <ListItem
        title={`${item?.name} ${
          item.id === activeBook.id ? ' - currently reading' : ''
        }`}
        description={`Page ${item?.currentPage} / ${item?.totalPages || '?'}`}
        onPress={() => onItemPress(item)}
        accessoryRight={DeleteButton}
      />
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <ScrollView>{bookList?.map(book => renderBookListItem(book))}</ScrollView> */}
        {/* <List
        data={bookList}
        ItemSeparatorComponent={Divider}
        renderItem={renderBookListItem}
      /> */}
        {bookList.map(book => (
          <BookListItem book={book} key={book.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// remove with a popup
function DeleteButton() {
  return <CustomIonIcon name="trash-outline" />;
}
