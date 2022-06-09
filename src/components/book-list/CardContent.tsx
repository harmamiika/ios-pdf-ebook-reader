import { Divider, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';
import { screenHeight, sideMargin } from './BookListItem';
import OverflowMenuButton from './OverFlowMenuButton';

interface CardContentProps {
  book: IBook;
}

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  // NOT RESPONSIVE
  return (
    <Text category="p1" style={{ marginBottom: 10 }}>
      {text}
    </Text>
  );
};

// TODO1: Place button better

// TRY TO MAKE BUTTON SMALLEER

// TODO: try more header sizes
// after find perfect scale for component
// => done !!

export default function CardContent({ book }: CardContentProps) {
  return (
    <View style={styles.itemBottomSide}>
      <View style={styles.descriptionContainer}>
        <Text category="p1" style={{ marginTop: 10 }}>
          {`Page ${book?.currentPage} / ${book?.totalPages || '?'}`}
        </Text>
        <Text category="p1">{`Started reading: 1.2.2022`}</Text>
        <Paragraph text="Bookmarked pages: 1, 69" />
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
