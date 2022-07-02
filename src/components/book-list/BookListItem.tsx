import { Divider, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, StyleSheet, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IBook } from '../../interfaces';
import { RootState } from '../../state';
import { setActiveBook } from '../../state/booksSlice';
import { CustomIonIcon } from '../reusable/CustomIonIcon';
import CardContent from './CardContent';
import OverflowMenuButton from './OverFlowMenuButton';
interface BookListItemProps {
  book: IBook;
}

export default function BookListItem({ book }: BookListItemProps) {
  const dispatch = useDispatch();
  const { activeBook } = useSelector((state: RootState) => state.books);

  const onItemPress = (event: any) => {
    console.log(event, 'event');
    dispatch(setActiveBook(book));
  };

  return (
    <TouchableHighlight onPress={onItemPress}>
      <View style={styles.itemContainer}>
        <View style={styles.itemHeading}>
          {/* HEADER */}
          <View style={styles.headerWrapper}>
            <Text category="h6">{book.name}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {book.id === activeBook?.id && (
              <CustomIonIcon
                name="ios-book-sharp"
                style={{ paddingRight: 15, paddingTop: 3 }}
              />
            )}
            <OverflowMenuButton book={book} />
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

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    height: (1.1 * screenHeight * 1.5) / 5 || 0,
    // backgroundColor: 'blue',
    backgroundColor: 'white',
    borderTopColor: 'gray',
    borderTopWidth: 1,
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
    display: 'flex',
    flexDirection: 'row',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: sideMargin / 4,
  },
});
