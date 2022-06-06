import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IBook } from '../../interfaces';

interface CardContentProps {
  book: IBook;
}

export default function CardContent({ book }: CardContentProps) {
  return (
    <Layout style={styles.itemBottomSide}>
      <Layout style={styles.descriptionContainer}>
        <Text style={styles.pages}>
          {book.currentPage} /{' '}
          {`Page ${book?.currentPage} / ${book?.totalPages || '?'}`}
        </Text>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  itemBottomSide: {
    flexBasis: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {},
  rightSideIconContainer: {},
  pages: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  description: {},
});
