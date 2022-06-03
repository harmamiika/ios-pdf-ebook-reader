import React, { useEffect, useState, useRef, useMemo } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  PanResponder,
} from 'react-native';
import Pdf from 'react-native-pdf';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveBookPage } from '../state/booksSlice';

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
  const [source, setSource] = useState({ uri: undefined });

  useEffect(() => {
    setSource({ uri: activeBook?.file?.fileCopyUri });
  }, [activeBook]);

  const onPageChanged = (page, numberOfPages) => {
    console.log(`Current page: ${page}`);
    console.log(`number of pages ${numberOfPages}`);
    dispatch(updateActiveBookPage(page));
  };

  const [zoomState, setZoomState] = useState({
    zoom: null,
    minZoom: null,
    layoutKnown: false,
    isZooming: false,
    isMoving: false,
    initialDistance: null,
    initialX: null,
    initalY: null,
    offsetTop: 0,
    offsetLeft: 0,
    initialTop: 0,
    initialLeft: 0,
    initialTopWithoutZoom: 0,
    initialLeftWithoutZoom: 0,
    initialZoom: 1,
    top: 0,
    left: 0,
  });

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
        //
        initialTop: zoomState.top,
        initialLeft: zoomState.left,
        initialZoom: zoomState.initialZoom,
        // lisää  vaas mitä et 80% todnäk tarvitse
      };
      console.log(newZoomState, 'new zoom initial State');
      setZoomState(newZoomState);

      console.log('after setsate');
    } else {
      let touchZoom = distance / zoomState.initialDistance;
      let zoom =
        touchZoom * zoomState.initialZoom > zoomState.minZoom
          ? touchZoom * zoomState.initialZoom
          : zoomState.minZoom;

      console.log(zoom, 'zoom');
      setZoomState({
        ...zoomState,
        zoom: zoom,
      });
      console.log(zoomState, 'zoomstate');
    }
  };

  const [swipeState, setSwipeState] = useState({
    center: undefined,
    distance: undefined,
  });

  const processSwipe = (x, y) => {
    if (!swipeState.center) {
      setSwipeState({
        center: { x, y },
        distance: undefined,
      });
      console.log('inited swipe', swipeState);
    } else {
      const distanceX = swipeState.center.x - x;
      const distanceY = swipeState.center.y - y;

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
          console.log('release');
          // setIsZooming(false);
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
        source={source}
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
