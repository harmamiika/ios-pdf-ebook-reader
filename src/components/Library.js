import { Divider, List, ListItem } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBook } from '../state/booksSlice';
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
      {/* <ScrollView>{bookList?.map(book => renderBookListItem(book))}</ScrollView> */}
      <List
        data={bookList}
        ItemSeparatorComponent={Divider}
        renderItem={renderBookListItem}
      />
    </SafeAreaView>
  );
}

// remove with a popup
function DeleteButton() {
  return <CustomIonIcon name="trash-outline" />;
}
