import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  PanResponder,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { exists, LibraryDirectoryPath } from 'react-native-fs';
import Pdf from 'react-native-pdf';
import { useDispatch, useSelector } from 'react-redux';
import { IBook } from '../../interfaces';
import { RootState } from '../../state';
import { setActiveBook, updateActiveBookPage } from '../../state/booksSlice';
import { toggleFullScreen } from '../../state/pdfViewerSlice';
import SimpleScreen from '../menu-screens/SimpleScreen';
import { MiikaText } from '../reusable/MiikaText';

function calcDistance(x1: number, y1: number, x2: number, y2: number) {
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function calcCenter(x1: number, y1: number, x2: number, y2: number) {
  function middle(p1: number, p2: number) {
    return p1 > p2 ? p1 - (p1 - p2) / 2 : p2 - (p2 - p1) / 2;
  }

  return {
    x: middle(x1, x2),
    y: middle(y1, y2),
  };
}

const initialZoom = {
  zoom: 1,
  minZoom: 0.5,
  isZooming: false,
  initialDistance: null,
  initialX: null,
  initialY: null,
  initialZoom: 1,
};

const PdfViewer = () => {
  const dispatch = useDispatch();
  const { activeBook } = useSelector((state: RootState) => state.books);
  const pdfViewerIsFullScreen = useSelector(
    (state: RootState) => state.pdfViewer.isFullScreen,
  );
  const [prevBook, setPrevBook] = useState<IBook | undefined>(activeBook);
  const [zoomState, setZoomState] = useState<any>(initialZoom);
  const [swipeState, setSwipeState] = useState<any>({
    center: undefined,
    distance: undefined,
  });

  useEffect(() => {
    if (prevBook?.id !== activeBook?.id) {
      setPrevBook(activeBook);
      setZoomState(initialZoom);
    }
  }, [activeBook]);

  const onPageChanged = (page: number, numberOfPages: number) => {
    dispatch(updateActiveBookPage(page));
    if (activeBook && !activeBook.totalPages) {
      dispatch(
        setActiveBook({
          ...activeBook,
          totalPages: numberOfPages,
        }),
      );
    }
    // trigger current zoom save to active book?
  };

  const onPdfPress = (event: any) => {
    const positionX = event.nativeEvent.pageX;
    if (positionX > 250) {
      // @ts-ignore
      this.pdf.setPage(activeBook?.currentPage + 1 || 1);
    } else if (positionX < 150) {
      // @ts-ignore
      this.pdf.setPage(activeBook?.currentPage - 1 || 1);
    } else {
      dispatch(toggleFullScreen());
    }
  };

  const processPinch = (x1: number, y1: number, x2: number, y2: number) => {
    let distance = calcDistance(x1, y1, x2, y2);
    let center = calcCenter(x1, y1, x2, y2);

    if (!zoomState.isZooming) {
      const newZoomState = {
        ...zoomState,
        isZooming: true,
        initialDistance: distance,
        initialX: center.x,
        initialY: center.y,
        // set initial zoom
        initialZoom: zoomState.zoom,
      };
      setZoomState(newZoomState);
    } else {
      let touchZoom = distance / zoomState.initialDistance;
      let zoom =
        touchZoom * zoomState.initialZoom > zoomState.minZoom
          ? touchZoom * zoomState.initialZoom
          : zoomState.minZoom;

      setZoomState({
        ...zoomState,
        zoom: zoom,
      });
    }
  };

  const processSwipe = (x: number, y: number) => {
    if (!swipeState.center) {
      setSwipeState({
        center: { x, y },
        distance: undefined,
      });
    } else {
      const distanceX = swipeState.center.x - x;
      const distanceY = swipeState.center.y - y;
      // reset swipe is not necessary?
      if (distanceX > 50 || distanceY > 50) {
        // @ts-ignore
        this.pdf.setPage(activeBook?.currentPage + 1 || 1);
      } else if (distanceX < -50 || distanceY < -50) {
        // @ts-ignore
        this.pdf.setPage(activeBook.currentPage - 1);
      }
    }
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => {
          return !(gestureState.dx === 0 && gestureState.dy === 0);
        },
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {},
        onPanResponderMove: (event, gestureState) => {
          const touches = event.nativeEvent.touches;
          // double tap

          if (touches.length === 1) {
            processSwipe(touches[0].pageX, touches[0].pageY);
          }

          if (touches.length >= 2) {
            let touch1 = touches[0];
            let touch2 = touches[1];
            processPinch(
              touch1.pageX,
              touch1.pageY,
              touch2.pageX,
              touch2.pageY,
            );
          }
        },
        onPanResponderRelease: (evt, gestureState) => {
          setZoomState({
            ...zoomState,
            ...{ isZooming: false, isMoving: false },
          });
          setSwipeState({
            center: undefined,
            distance: undefined,
          });
        },
        // hmmmm
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderTerminate: (evt, gestureState) => {},
        onShouldBlockNativeResponder: (evt, gestureState) => true,
      }),
    [zoomState, swipeState],
  );

  const [fileFound, setFileFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      if (activeBook && isLoading) {
        setIsLoading(true);
        const fileExists = await exists(
          `${LibraryDirectoryPath}/${activeBook.file.name}`,
        );
        setFileFound(fileExists);
        setIsLoading(false);
      }
    })();
  }, [activeBook]);

  const renderMainContent = () => {
    if (!activeBook)
      return (
        <SimpleScreen header="No book selected">
          <MiikaText text="You can select and add books in library" />
        </SimpleScreen>
      );
    else if (activeBook && isLoading)
      return (
        <View>
          <MiikaText text="Loading..." />
        </View>
      );
    else if (activeBook && !fileFound)
      return (
        <SimpleScreen header="File not found">
          <MiikaText text="You should delete this book in the library, then reselect it." />
          <MiikaText
            text="If this does not work, this file can't be read with this app. 
          A possible, but not certain cause could be weird characters in the file name.
          You can try to renaming the file and then reselecting it."
          />
        </SimpleScreen>
      );
    else
      return (
        <View style={styles.container}>
          <View {...panResponder.panHandlers}>
            {pdfViewerIsFullScreen && <StatusBar hidden />}
            <TouchableWithoutFeedback onPress={onPdfPress}>
              <Pdf
                singlePage={true}
                enableAnnotationRendering={true}
                enablePaging={true}
                source={{
                  uri: `${LibraryDirectoryPath}/${activeBook.file.name}`,
                  // uri: activeBook.copyFileUri,
                  // uri: activeBook.file.uri,
                }}
                style={styles.pdf}
                ref={(pdf: any) => {
                  // @ts-ignore
                  this.pdf = pdf;
                }}
                onPageChanged={onPageChanged}
                // @ts-ignore
                onLoadComplete={() => this.pdf.setPage(activeBook.currentPage)}
                minScale={1}
                maxScale={3}
                scale={zoomState.zoom}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
  };

  return <>{renderMainContent()}</>;
};

export default PdfViewer;
// add login for first open

// zoomstate bug notes:
// checkaa miten mounttaa
// miten säilyy kirjojen välillä

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
