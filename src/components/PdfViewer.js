import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';

import { store } from '../state';

export default function PdfViewer() {
  const { activeBook } = useSelector(state => state.books);
  const [controlledPage, setControlledPage] = useState(1);

  const isDarkMode = useColorScheme() === 'dark';

  // fileCopyUri, uri
  // const source = require('../file.pdf');
  const source = { uri: activeBook.fileCopyUri };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log(source, 'source');
  console.log(activeBook, 'activeBook from pdf');
  console.log(store.getState(), 'store fet state pdf viewwe');

  const onSetPagePress = () => {
    console.log(this.pdf, 'pdf');
    this.pdf.setPage(3);
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
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
              setControlledPage(page);
            }}
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
