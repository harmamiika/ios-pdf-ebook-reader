import { Reader, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { LibraryDirectoryPath } from 'react-native-fs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { IBook, IEPubPageInfo } from '../interfaces';
import { updateBook } from '../state/booksSlice';
import { screenHeight, screenWidth } from '../utils/cssHelpers';

export function EpubProcessor({ children }: React.PropsWithChildren<{}>) {
  const { goNext, currentLocation } = useReader();
  const dispatch = useDispatch();
  const book = useSelector((state: any) => state.books.activeBook);

  React.useEffect(() => {
    // if (book?.totalPages === undefined) {
    //   console.log('onLocationChange!!!!!!!!!!!!!!!!!');
    //   console.log(book.totalPages, 'total pages');
    //   if (!book.totalPages) {
    //     // go forward infinitely and log add pageCount to the pages obj
    //     if (!currentLocation) {
    //       console.log('SOS no current location');
    //       return;
    //     }
    //     pages.current.push({
    //       page: pages.current.length + 1,
    //       cfi: currentLocation?.start.cfi,
    //       percentage: currentLocation?.start.percentage,
    //       currentLocation: currentLocation,
    //     });
    //     // trigger cal function
    //     console.log(book.currentPage, 'current page');
    //     console.log(currentLocation?.start.percentage, 'percentage');
    //     // console.log(currentLocation?.end.location, 'end location')
    //     console.log(book.totalPages, 'total pages');
    //     // if at start of book, go next one time
    //     console.log(currentLocation?.atStart, 'at start');
    //     // calculateTotalPages();
    //     if (currentLocation?.atEnd === true) {
    //       // save pages to active book
    //       dispatch(
    //         updateBook({
    //           ...book,
    //           totalPages: pages.current.length,
    //           epubPages: pages.current,
    //         }),
    //       );
    //     } else {
    //       goNext();
    //     }
    //   }
    // }
  }, [book]);
  const pages = React.useRef<IEPubPageInfo[]>([]);
  console.log(pages, 'pages');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'red',
        width: screenWidth,
        height: screenHeight,
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <View>
        {/* <Reader
          src={`${LibraryDirectoryPath}/${book.file.name}`}
          fileSystem={useFileSystem}
          width={Dimensions.get('window').width}
          height={Dimensions.get('window').height - 100}
          //   initialLocation={
          //     book.epubPages?.[book.currentPage - 1].cfi
          //   }
          onFinish={() => console.log('finished')}
        /> */}
        {/* <Button style={{ height: 100 }}>yo</Button> */}
      </View>
      {children}
    </SafeAreaView>
  );
}
