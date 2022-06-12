import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { screenHeight, sideMargin } from '../../utils/cssHelpers';
import { MiikaText } from '../reusable/MiikaText';

interface CardContentProps {
  book: IBook;
}

// TODO1: Place button better

// TRY TO MAKE BUTTON SMALLEER

// TODO: try more header sizes
// after find perfect scale for component
// => done !!

export default function CardContent({ book }: CardContentProps) {
  console.log(book, 'book');
  const bookmarksString = useMemo(
    () => book.bookmarks.map(m => m.page.toString()).join(', '),
    [book],
  );

  return (
    <View style={styles.itemBottomSide}>
      <View style={styles.descriptionContainer}>
        <MiikaText
          text={`Page ${book?.currentPage} / ${book?.totalPages || '?'}`}
          marginTop={10}
        />

        <MiikaText
          text={
            book.bookmarks.length > 0
              ? `Bookmarked pages: ${bookmarksString}`
              : 'No bookmarks'
          }
        />
        <MiikaText
          text={`Started reading: ${format(
            new Date(book.startDate),
            'EEEE d. MMMM, y',
          )}`}
          marginBottom={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemBottomSide: {
    // height: '100%',
    height: screenHeight / 6.66 || 0,
    // height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
    // alignItems: 'center',
    // alignContent: 'center',
    // backgroundColor: 'red',
  },
  descriptionContainer: {
    marginLeft: sideMargin,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    // backgroundColor: 'blue',
  },
  buttonContainer: {
    marginRight: sideMargin / 2 || 0,
    marginTop: 10,
  },
});
