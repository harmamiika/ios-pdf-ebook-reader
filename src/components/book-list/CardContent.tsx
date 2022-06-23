import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { screenHeight, sideMargin } from '../../utils/cssHelpers';
import { MiikaText } from '../reusable/MiikaText';
import ThumbnailImage from './ThumbnailImage';

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
          marginTop={15}
        />

        <View>
          <MiikaText
            text={
              book.bookmarks.length > 0
                ? `Bookmarked pages: ${bookmarksString}`
                : 'No bookmarks'
            }
          />
        </View>

        <View>
          <MiikaText text={`Started reading: `} />
          <MiikaText
            text={`${format(new Date(book.startDate), 'EEEE d. MMMM, y')}`}
            marginBottom={15}
          />
        </View>
      </View>

      <View style={styles.imageWrapper}>
        <ThumbnailImage book={book} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemBottomSide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  descriptionContainer: {
    marginLeft: sideMargin / 1.3333,
    height: '90%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
  },
  imageWrapper: {
    marginRight: sideMargin / 1.3333 || 0,
    backgroundColor: 'red',
  },
});
