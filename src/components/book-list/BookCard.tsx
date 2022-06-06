import { Card, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { IBook } from '../../interfaces';
import CardContent from './CardContent';
import OverflowMenuButton from './OverFlowMenuButton';

interface BookCardProps {
  book: IBook;
}

export default function BookCard({ book }: BookCardProps) {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState();
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  console.log(book, 'book book');

  // const onItemPress = () => {
  //   console.log('press');
  //   dispatch(setActiveBook(book));
  // };

  const renderHeader = (props: any) => (
    <Layout {...props} styles={styles.headerLayout}>
      <Text category="h6">{book.name}</Text>
      <OverflowMenuButton />
    </Layout>
  );

  return (
    <Card header={renderHeader}>
      <Layout>
        <CardContent book={book} />
      </Layout>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-end',
    backgroundColor: 'red',
  },
});
