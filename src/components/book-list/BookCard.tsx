import { Card, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { IBook } from '../../interfaces';
import CardContent from './CardContent';
import OverflowMenuButton from './OverFlowMenuButton';

interface BookCardProps {
  book: IBook;
}

export default function BookCard({ book }: BookCardProps) {
  // console.log(book, 'book book');

  // const onItemPress = () => {
  //   console.log('press');
  //   dispatch(setActiveBook(book));
  // };

  const renderHeader = (props: any) => (
    <Layout {...props}>
      <Text category="h6">{book.name}</Text>
    </Layout>
  );

  return (
    <Card header={renderHeader}>
      <Layout style={styles.contentLayout}>
        <CardContent book={book} />
      </Layout>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerLayout: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  contentLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
  },
});
