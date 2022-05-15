import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setActiveBook } from '../state/booksSlice';
import { Divider, List, ListItem } from '@ui-kitten/components';

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

export default function BookListItem({ item }) {
  const dispatch = useDispatch();

  console.log(item, 'item item');

  const onItemPress = () => {
    console.log('press');
    dispatch(setActiveBook(item));
  };

  return (
    // <View>
    //   <View style={styles.sectionContainer}>
    //     <Text onPress={onItemPress}>{item.name}</Text>
    //   </View>
    <ListItem
      title={`${item.name}`}
      description={`Page ${item.currentPage} / ${item.totalPages || '?'}`}
      onPress={onItemPress}
    />
    // </View>
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
