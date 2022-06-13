import { Dimensions } from 'react-native';

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');

export const sideMargin = screenWidth / 15;

export const topMargin = screenHeight / 50;
