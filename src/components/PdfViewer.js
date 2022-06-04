import React, { useMemo, useState } from 'react';
import { Dimensions, PanResponder, StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBook, updateActiveBookPage } from '../state/booksSlice';

function calcDistance(x1, y1, x2, y2) {
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function calcCenter(x1, y1, x2, y2) {
  function middle(p1, p2) {
    return p1 > p2 ? p1 - (p1 - p2) / 2 : p2 - (p2 - p1) / 2;
  }

  return {
    x: middle(x1, x2),
    y: middle(y1, y2),
  };
}

export default function PdfViewer() {
  const dispatch = useDispatch();
  const { activeBook } = useSelector(state => state.books);

  const [swipeState, setSwipeState] = useState({
    center: undefined,
    distance: undefined,
  });

  const [zoomState, setZoomState] = useState({
    zoom: null,
    minZoom: null,
    isZooming: false,
    initialDistance: null,
    initialX: null,
    initalY: null,
    initialZoom: 1,
  });

  const onPageChanged = (page, numberOfPages) => {
    console.log(`Current page: ${page}`);
    console.log(`number of pages ${numberOfPages}`);
    dispatch(updateActiveBookPage(page));
    if (!activeBook.totalPages) {
      dispatch(
        setActiveBook({
          ...activeBook,
          totalPages: numberOfPages,
        }),
      );
    }
    // trigger current zoom save to active book?
  };

  const processPinch = (x1, y1, x2, y2) => {
    let distance = calcDistance(x1, y1, x2, y2);
    let center = calcCenter(x1, y1, x2, y2);

    if (!zoomState.isZooming) {
      const newZoomState = {
        ...zoomState,
        isZooming: true,
        initialDistance: distance,
        initialX: center.x,
        initialY: center.y,
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

  const processSwipe = (x, y) => {
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
        this.pdf.setPage(activeBook.currentPage + 1);
      } else if (distanceX < -50 || distanceY < -50) {
        this.pdf.setPage(activeBook.currentPage - 1);
      }
    }
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {},
        onPanResponderMove: (event, gestureState) => {
          const touches = event.nativeEvent.touches;

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

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Pdf
        singlePage={true}
        enableAnnotationRendering={true}
        enablePaging={true}
        source={{ uri: activeBook?.file?.fileCopyUri }}
        style={styles.pdf}
        ref={pdf => {
          this.pdf = pdf;
        }}
        onPageChanged={onPageChanged}
        onLoadComplete={() => this.pdf.setPage(activeBook.currentPage)}
        minScale={1}
        maxScale={3}
        scale={zoomState.zoom}
      />
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
