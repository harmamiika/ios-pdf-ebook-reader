import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import FilePicker from './FilePicker';
import { useDispatch, useSelector } from 'react-redux';
import BookListItem from './BookListItem';
import { Divider, List, ListItem } from '@ui-kitten/components';
import { setActiveBook } from '../state/booksSlice';

export default function Menu() {
  const dispatch = useDispatch();
  const { bookList } = useSelector(state => state.books);

  const onItemPress = book => {
    dispatch(setActiveBook(book));
  };

  const renderBookListItem = ({ item }) => {
    return (
      <ListItem
        title={`${item?.name}`}
        description={`Page ${item?.currentPage} / ${item?.totalPages || '?'}`}
        onPress={() => onItemPress(item)}
      />
    );
  };

  return (
    <SafeAreaView>
      {/* <ScrollView>{bookList?.map(book => renderBookListItem(book))}</ScrollView> */}
      <List
        data={bookList}
        ItemSeparatorComponent={Divider}
        renderItem={renderBookListItem}
      />

      <FilePicker />
    </SafeAreaView>
  );
}
