import React, { useEffect, useRef } from 'react';
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import { Dimensions, Text, useWindowDimensions, View } from 'react-native';
import { LibraryDirectoryPath, MainBundlePath } from 'react-native-fs';
import { IBook, IEPubPageInfo } from '../../interfaces';
import { Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import {
  setActiveBook,
  updateActiveBookPage,
  updateBook,
} from '../../state/booksSlice';
import { WebView } from 'react-native-webview';
import RNFS from 'react-native-fs';
import { useServer } from './useServer';
// import { Book } from "epubjs-react-native";

// todos: create book processing after selecting
// do some cleanup? - uninstall static server yms?
// fork lib?

interface ReaderProps {
  activeBook: IBook;
}
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

  // const readerRef = useRef<any>();
  // console.log(readerRef, 'readerRef');

  console.log(getLocations(), 'getLocations()');
  console.log(locations, 'locations');
  console.log(totalLocations, 'totalLocations');
  console.log(progress, 'progress');
  console.log(currentLocation, 'currentLocation');

  const dispatch = useDispatch();

  React.useEffect(() => {
    const activeBookCfi =
      activeBook?.epubPages?.[(activeBook?.currentPage || 1) - 1].cfi;
    console.log(activeBookCfi, 'current cfi');
    if (activeBookCfi !== currentLocation?.start?.cfi) {
      console.log('different cfi');
      goToLocation(activeBookCfi);
    }
    // set max page to current location if higher thgan max poage
    console.log('executed');
    // if (activeBook.currentPage !== 1) {
    // changeFontSize(20);
  }, [activeBook.currentPage]);

  const location = React.useRef<number>();
  const pages = React.useRef<IEPubPageInfo[]>([]);
  console.log(pages, 'pages');

  const onLocationChange = () => {
    // console.log('onLocationChange!!!!!!!!!!!!!!!!!');
    // console.log(activeBook.totalPages, 'total pages');
  };

  const onSwipe = (direction: string) => {
    if (direction === 'left') {
      dispatch(updateActiveBookPage(activeBook.currentPage + 1));
    } else {
      dispatch(updateActiveBookPage(activeBook.currentPage - 1));
    }
  };

  console.log(activeBook.totalPages, 'total pages');
  console.log(activeBook.currentPage, 'current page');
  console.log(activeBook.epubPages?.length, 'epub pages length');

  // improve zoom ? better still not to disable probably

  console.log(Dimensions.get('window').height, 'window height');

  const { width, height } = useWindowDimensions();

  // created my Miika

  return (
    <View
      style={{
        // flex: 1,
        // backgroundColor: 'red',
        // width: 400,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'red',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      {/* <View> */}
      <Reader
        src={`${LibraryDirectoryPath}/${activeBook.file.name}`}
        fileSystem={useFileSystem}
        width={Dimensions.get('window').width}
        height={height - 91}
        onResized={size => console.log(size, 'resized')}
        initialLocation={
          activeBook.epubPages?.[(activeBook?.currentPage || 1) - 1].cfi ||
          undefined
        }
        // enableSwipe
        onSwipeLeft={() => onSwipe('left')}
        onSwipeRight={() => onSwipe('right')}
        onLocationChange={onLocationChange}
        onFinish={() => console.log('finished')}
        onLocationsReady={locations =>
          console.log(locations, 'locations ready')
        }
      />
      {/* </View> */}
      {/* <View style={{ height: 100 }}></View> */}
    </View>
  );
}
