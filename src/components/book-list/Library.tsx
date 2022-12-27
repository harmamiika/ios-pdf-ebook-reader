import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import SimpleScreen from '../menu-screens/SimpleScreen';
import { AdmobBannerAd } from '../reusable/ads/BannerAd';
import { MiikaText } from '../reusable/MiikaText';
import BookListItem, { screenHeight, screenWidth } from './BookListItem';

export default function Library() {
  const { bookList } = useSelector((state: RootState) => state.books);

  for (let book of bookList) {
    console.log(book.uri, 'book.uri');
    // console.log(book.file.fileCopyUri, 'file copy uri');
    // console.log(book.file.uri, 'file uri');
  }

  // console.log(bookList, 'book List');

  if (!bookList.length)
    return (
      <SimpleScreen header="Library is empty">
        <MiikaText text="Add a book by pressing the plus icon." />
      </SimpleScreen>
    );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {bookList.map(book => (
          <BookListItem book={book} key={book.id} />
        ))}
      </ScrollView>
      <AdmobBannerAd adUnitId="ca-app-pub-8279790179515379/2242175832" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // display: 'flex',
    // alignContent: 'flex-end',
  },
  scrollView: {
    width: screenWidth,
    height: screenHeight,
  },
});
