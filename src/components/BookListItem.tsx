import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setActiveBook } from '../state/booksSlice';
import { Divider, List, ListItem } from '@ui-kitten/components';
import { IBook } from '../interfaces';

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

interface BookListItemProps {
  book: IBook;
}

export default function BookListItem({ book }: BookListItemProps) {
  const dispatch = useDispatch();

  console.log(book, 'book book');

  const onItemPress = () => {
    console.log('press');
    dispatch(setActiveBook(book));
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeading}>
        <Text style={styles.title}>{book.name}</Text>
      </View>
      <View style={styles.itemBottomSide}>
        <View style={styles.descriptionContainer}></View>
        <View style={styles.rightSideIconContainer}></View>
      </View>
    </View>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    height: screenHeight / 8,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  itemHeading: {
    width: '100%',
    height: '25%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  itemBottomSide: {},
  descriptionContainer: {},
  rightSideIconContainer: {},
  title: {
    fontSize: screenHeight / 45,
    paddingLeft: screenWidth / 100,
    fontWeight: '400',
  },
  description: {},
  rightSideIcon: {},
});

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
