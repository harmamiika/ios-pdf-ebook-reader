import { Divider, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { Paragraph } from '../reusable/Paragraph';
import { screenHeight, sideMargin } from './BookListItem';
import OverflowMenuButton from './OverFlowMenuButton';

interface CardContentProps {
  book: IBook;
}

// TODO1: Place button better

// TRY TO MAKE BUTTON SMALLEER

// TODO: try more header sizes
// after find perfect scale for component
// => done !!

export default function CardContent({ book }: CardContentProps) {
  return (
    <View style={styles.itemBottomSide}>
      <View style={styles.descriptionContainer}>
        <Paragraph
          text={`Page ${book?.currentPage} / ${book?.totalPages || '?'}`}
          marginTop={10}
        />
        <Paragraph text={`Started reading: 1.2.2022`} />
        <Paragraph text="Bookmarked pages: 1, 69" marginBottom={10} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemBottomSide: {
    // height: '100%',
    height: screenHeight / 6.66666666666666 || 0,
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
    marginRight: sideMargin / 2,
    marginTop: 10,
  },
});
