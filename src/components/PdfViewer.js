import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveBookPage } from '../state/booksSlice';

export default function PdfViewer() {
  const dispatch = useDispatch();
  const { activeBook } = useSelector(state => state.books);
  const [source, setSource] = useState({ uri: undefined });

  const isDarkMode = useColorScheme() === 'dark';

  // fileCopyUri, uri
  // const source = require('../file.pdf');
  // const source = { uri: activeBook?.file?.fileCopyUri };

  useEffect(() => {
    setSource({ uri: activeBook?.file?.fileCopyUri });
  }, [activeBook]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const onSetPagePress = () => {
  //   console.log(this.pdf, 'pdf');
  //   this.pdf.setPage(3);
  // };

  const onPageChanged = (page, numberOfPages) => {
    console.log(`Current page: ${page}`);
    console.log(`number of pages ${numberOfPages}`);
    dispatch(updateActiveBookPage(page));
  };

  const goPageForward = () => {
    this.pdf.setPage(activeBook.currentPage + 1);
  };

  const goPageBackwards = () => {
    this.pdf.setPage(activeBook.currentPage - 1);
  };

  console.log(Dimensions.get('window').height, 'height');

  return (
    <View style={styles.container}>
      <GestureRecognizer
        onSwipeRight={goPageBackwards}
        onSwipeLeft={goPageForward}
        onSwipeUp={goPageForward}
        onSwipeDown={goPageBackwards}>
        <Pdf
          singlePage={true}
          enableAnnotationRendering={true}
          enablePaging={true}
          source={source}
          style={styles.pdf}
          ref={pdf => {
            this.pdf = pdf;
          }}
          onPageChanged={onPageChanged}
          onLoadComplete={() => this.pdf.setPage(activeBook.currentPage)}
        />
      </GestureRecognizer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginBottom: Dimensions.get('window').height / 35,
  },
});
