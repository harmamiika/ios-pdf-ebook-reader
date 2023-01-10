import { Dimensions } from 'react-native';

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');

export const sideMargin = screenWidth / 15;

export const topMargin = screenHeight / 50;

export const headerIconsize = 28;

export const headerIconSidePadding = 15;

export const isTablet = Dimensions.get('screen').width > 500;
// import { Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('screen');

// const isIpad = (width >= 768 || height >= 768);
// const isIphone = (width <= 375 && height <= 812);

// console.log('isIpad:', isIpad);
// console.log('isIphone:', isIphone);

// import { Platform } from 'react-native';
// console.log(Platform.OS);
// .isPad
