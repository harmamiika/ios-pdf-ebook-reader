import { useTheme } from '@ui-kitten/components';
import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { screenHeight, sideMargin } from '../../utils/cssHelpers';
import { CustomIonIcon } from '../reusable/CustomIonIcon';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';
import { MiikaText } from '../reusable/MiikaText';
import StartedReading from './StartedReading';
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
  const theme = useTheme();
  const iconColor = theme['text-basic-color'];

  const bookmarksString = useMemo(
    () => book.bookmarks.map(m => m.page.toString()).join(', '),
    [book],
  );

  return (
    <View style={styles.itemBottomSide}>
      <View style={styles.descriptionContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome5Icon
            name="book"
            size={16}
            style={{ paddingRight: 20, marginTop: 10, color: iconColor }}
          />

          <View>
            <MiikaText text={`Page: `} marginTop={10} />

            <MiikaText
              text={`${book?.currentPage}${
                book.totalPages ? ` / ${book.totalPages}` : ''
              }`}
              // marginTop={15}
              category={'p2'}
            />
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CustomIonIcon
            name="bookmarks-sharp"
            size={16}
            style={{ paddingRight: 20, color: iconColor }}
          />
          <View>
            <MiikaText
              text={
                book.bookmarks.length > 0
                  ? `Bookmarked pages: `
                  : 'No bookmarks'
              }
            />

            {book.bookmarks.length > 0 && (
              <MiikaText
                text={`${bookmarksString}`}
                category="p2"
                style={{ flexWrap: 'wrap', paddingRight: 50 }}
                numberOfLines={2}
              />
            )}
          </View>
        </View>

        <StartedReading book={book} />
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
    backgroundColor: 'lightgray',
  },
});
