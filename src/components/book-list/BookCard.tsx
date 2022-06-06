import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import booksSlice, { setActiveBook } from '../../state/booksSlice';
import {
  Text,
  Button,
  Divider,
  List,
  ListItem,
  MenuItem,
  OverflowMenu,
  Card,
  Layout,
} from '@ui-kitten/components';
import { IBook } from '../../interfaces';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';
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
      <Layout></Layout>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    backgroundColor: 'red',
  },
});
