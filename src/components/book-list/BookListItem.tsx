import { Divider, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import CardContent from './CardContent';
import OverflowMenuButton from './OverFlowMenuButton';
interface BookListItemProps {
  book: IBook;
}

export default function BookListItem({ book }: BookListItemProps) {
  console.log(book, 'book book');

  // const onItemPress = () => {
  //   console.log('press');
  //   dispatch(setActiveBook(book));
  // };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeading}>
        <View style={styles.headerWrapper}>
          <Text category="h5">{book.name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <OverflowMenuButton />
        </View>
      </View>
      <Divider />
      <CardContent book={book} />
    </View>
  );
}

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');

export const sideMargin = screenWidth / 15;

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    height: (1.1 * screenHeight) / 5,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  itemHeading: {
    width: '100%',
    height: (1.2 * screenHeight) / 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerWrapper: {
    marginLeft: sideMargin,
    // marginTop: screenHeight / 120,
  },
  buttonContainer: {
    marginRight: sideMargin / 4,
  },
});
