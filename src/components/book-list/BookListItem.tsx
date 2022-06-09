import { Divider, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, StyleSheet, TouchableHighlight, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { IBook } from '../../interfaces';
import { setActiveBook } from '../../state/booksSlice';
import CardContent from './CardContent';
import OverflowMenuButton from './OverFlowMenuButton';
interface BookListItemProps {
  book: IBook;
}

export default function BookListItem({ book }: BookListItemProps) {
  const dispatch = useDispatch();

  const onItemPress = () => {
    dispatch(setActiveBook(book));
  };

  const styles = StyleSheet.create({
    itemContainer: {
      width: screenWidth,
      height: (1.1 * screenHeight) / 5 || 0,
      backgroundColor: 'white',
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    itemHeading: {
      width: '100%',
      height: (1.2 * screenHeight) / 20 || 0,
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

  return (
    <TouchableHighlight onPress={onItemPress}>
      <View style={styles.itemContainer}>
        <View style={styles.itemHeading}>
          <View style={styles.headerWrapper}>
            <Text category="h6">{book.name}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <OverflowMenuButton />
          </View>
        </View>
        <Divider />
        <CardContent book={book} />
      </View>
    </TouchableHighlight>
  );
}

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');

export const sideMargin = screenWidth / 15;
