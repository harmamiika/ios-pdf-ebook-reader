import React from 'react';
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import { Dimensions, View } from 'react-native';
import { LibraryDirectoryPath, MainBundlePath } from 'react-native-fs';
import { IBook } from '../../interfaces';
import { Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { setActiveBook } from '../../state/booksSlice';
import WebView from 'react-native-webview';

interface ReaderProps {
  activeBook: IBook;
}

import RNFS from 'react-native-fs';

const MyEpubViewer = ({ activeBook }: { activeBook: IBook }) => {
  const [data, setData] = React.useState<any>(undefined);
  const ePubFilePath = `${LibraryDirectoryPath}/${activeBook.file.name}`;

  React.useEffect(() => {
    RNFS.readFile(ePubFilePath, 'base64')
      .then(data => {
        setData(data);
      })
      .catch(err => console.log(err.message, err.code));
  }, []);

  if (data) {
    return (
      <WebView
        source={{ uri: `data:application/epub+zip;base64,${data}` }}
        style={{ flex: 1 }}
      />
    );
  }

  return null;
};

export function EPubReader({ activeBook }: ReaderProps) {
  const {
    goToLocation,
    getLocations,
    locations,
    totalLocations,
    progress,
    goNext,
    goPrevious,
    atEnd,
    currentLocation,
  } = useReader();
  console.log(getLocations(), 'getLocations()');
  console.log(locations, 'locations');
  console.log(totalLocations, 'totalLocations');
  console.log(progress, 'progress');
  console.log(currentLocation, 'currentLocation');

  const dispatch = useDispatch();

  React.useEffect(() => {
    // tsekkaa onko kauempana kuin max page
    //   goToLocation(activeBook?.currentPage.toString() || '9');
    goToLocation(42 as any);
    // set max page to current location if higher thgan max poage
    console.log('executed');
    // if (activeBook.currentPage !== 1) {

    // changeFontSize(20);
  }, [activeBook]);

  // if activebook has no max pages, goT

  //   React.useEffect(() => {
  //     if (!activeBook.totalPages) {
  //       let curr = 0;
  //       const previous = 0;
  //       while (true) {
  //         goNext();
  //       }
  //     }
  //   }, [activeBook]);

  const location = React.useRef<number>();

  const goForward = () => {
    // while (activeBook.currentPage < 100) {

    console.log(activeBook.currentPage, 'current page');
    console.log(activeBook.totalPages, 'total pages');

    // if at start of book, go next one time
    console.log(currentLocation?.atStart, 'at start');

    if (activeBook.currentPage === 1) {
      goNext();
      if (!currentLocation?.atStart) {
        if (!activeBook.totalPages && currentLocation?.end.location) {
          dispatch(
            setActiveBook({
              ...activeBook,
              totalPages: currentLocation?.end.location,
            }),
          );
        }
        totalLocations;
      }
    }

    goNext();
    console.log(currentLocation?.end.percentage, 'percentage');
    console.log(currentLocation?.end.location, 'end location');

    if (activeBook.currentPage !== 1 && currentLocation?.atStart) {
      // kelaa kunnes currentpagella
      const readerLocation = currentLocation.end.location;
      while (readerLocation < activeBook.currentPage) {
        goNext();
        // wait a timeout?
      }
    }

    // }

    // for (let i = 0; i < 10; i++) {
    //   goNext();
    //   console.log((currentLocation as any)?.location, 'currentLocation');
    // }
  };

  const goEnd = () => {
    if (!activeBook.totalPages || activeBook.totalPages === 1) {
      goNext;
    }

    console.log('yo');

    for (let i = 0; i < totalLocations; i++) {
      goNext();
    }

    // while (
    //   currentLocation?.end.location &&
    //   currentLocation?.end.location < totalLocations
    // ) {
    //   goNext();
    // }
  };

  console.log(`${LibraryDirectoryPath}/${activeBook.file.name}`, 'path PATHHH');
  console.log(MainBundlePath, 'main bundle path');

  const filePath = `${LibraryDirectoryPath}/${activeBook.file.name}`;
  const fileUri = `file://${filePath}`;
  console.log(fileUri);

  console.log(activeBook.file.fileCopyUri, 'fileCopyUri');

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      {/* <Reader
        src={`${LibraryDirectoryPath}/${activeBook.file.name}`}
        fileSystem={useFileSystem}
        width={Dimensions.get('window').width}
        // pinchToZoom={true}
        height={Dimensions.get('window').height - 100}
        //   onResized={size => console.log(size, 'resized')}
        //   height={500}
        //   enableSwipe={true}
        key={2}
      /> */}
      {/* <Epub
        src={`${LibraryDirectoryPath}/${activeBook.file.name}`}
        flow={'paginated'}
      /> */}

      {/* <MyEpubViewer activeBook={activeBook} /> */}

      <WebView
        // originWhitelist={['*']}
        // source={{ uri: fileUri }}
        // source={{ uri: filePath }}

        source={{ uri: activeBook.file.uri }}
        allowFileAccess={true}
        // google com
        // source={{ uri: 'https://www.google.com/' }}

        // source={{ html: '<h1>Hello world</h1>' }}
        style={{ marginTop: 20, height: 500, width: 400 }}
      />
      <Button onPress={() => goNext()}>yo</Button>
      <Button onPress={() => goPrevious()}>prev</Button>
      <Button onPress={() => goForward()}>location</Button>
      <Button onPress={() => goEnd()}>end</Button>
      {/* <View style={{ height: 100 }}></View> */}
    </View>
  );
}
