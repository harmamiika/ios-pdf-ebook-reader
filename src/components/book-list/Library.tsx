import { useTheme } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IBook } from '../../interfaces';
import { RootState } from '../../state';
import { setActiveBook } from '../../state/booksSlice';
import SimpleScreen from '../menu-screens/SimpleScreen';
import { AdmobBannerAd } from '../reusable/ads/BannerAd';
import { MiikaText } from '../reusable/MiikaText';
import BookListItem, { screenHeight, screenWidth } from './BookListItem';

interface LibraryProps {
  navigation: any;
}

export default function Library({ navigation }: LibraryProps) {
  const dispatch = useDispatch();
  const bookList = useSelector((state: RootState) => state.books.bookList);
  const activeBook = useSelector((state: RootState) => state.books.activeBook);

  const theme = useTheme();
  const color = theme['text-basic-color'];

  // not the prettiest solution, but it works
  useEffect(() => {
    if (bookList.length === 1 && !activeBook) {
      dispatch(setActiveBook(bookList[0]));
    }
  }, [bookList]);

  if (!bookList.length)
    return (
      <SimpleScreen header="Library is empty">
        <MiikaText text="Add a book by pressing the plus icon." />
      </SimpleScreen>
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderTopColor: color,
        borderTopWidth: 1,
      }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        {bookList.map((book: IBook) => (
          <BookListItem book={book} key={book.id} navigation={navigation} />
        ))}
      </ScrollView>
      <AdmobBannerAd adUnitId="ca-app-pub-8279790179515379/2242175832" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: screenWidth,
    height: screenHeight,
  },
});
