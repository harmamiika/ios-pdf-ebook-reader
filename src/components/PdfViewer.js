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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';

import { store } from '../state';
import { setActiveBook, updateActiveBook } from '../state/booksSlice';

export default function PdfViewer() {
  const { activeBook } = useSelector(state => state.books);
  const [controlledPage, setControlledPage] = useState(activeBook.currentPage);
  const dispatch = useDispatch();

  const isDarkMode = useColorScheme() === 'dark';

  // fileCopyUri, uri
  // const source = require('../file.pdf');
  // const source = { uri: activeBook?.file?.fileCopyUri };

  const [source, setSource] = useState({ uri: undefined });

  useEffect(() => {
    setSource({ uri: activeBook?.file?.fileCopyUri });
    setControlledPage(activeBook?.currentPage);
  }, [activeBook]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log(source, 'source');
  console.log(activeBook, 'activeBook from pdf');
  console.log(store.getState(), 'store fet state pdf viewwe');

  // const onSetPagePress = () => {
  //   console.log(this.pdf, 'pdf');
  //   this.pdf.setPage(3);
  // };

  const onPageChanged = (page, numberOfPages) => {
    console.log(`Current page: ${page}`);
    console.log(`number of pages ${numberOfPages}`);
    dispatch(updateActiveBook(page));
    setControlledPage(page);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title="page--"
            onPress={() => this.pdf.setPage(controlledPage - 1)}
          />
          <Button
            onPress={() => this.pdf.setPage(controlledPage + 1)}
            title="page++"
          />
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
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
