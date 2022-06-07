import { Divider, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
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
        <Text category="h6">{book.name}</Text>
      </View>
      <Divider />
      <View style={styles.itemBottomSide}>
        <View style={styles.descriptionContainer}>
          <Text>
            {book.currentPage} /{' '}
            {`Page ${book?.currentPage} / ${book?.totalPages || '?'}`}
          </Text>
        </View>
        <OverflowMenuButton />
      </View>
    </View>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    height: screenHeight / 5,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  itemHeading: {
    width: '100%',
    height: '25%',
    backgroundColor: 'blue',
    display: 'flex',
  },
  itemBottomSide: {
    flexBasis: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {},
});
