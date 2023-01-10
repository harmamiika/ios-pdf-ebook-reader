import { Slider } from '@miblanchard/react-native-slider';
import { useTheme } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { IBook } from '../../interfaces';
import { CustomIonIcon } from '../reusable/CustomIonIcon';
import { MiikaText } from '../reusable/MiikaText';

interface PageJumperProps {
  activeBook: IBook;
  updateActiveBookPage: (page: number) => void;
}

export default function PageJumper({
  activeBook,
  updateActiveBookPage,
}: PageJumperProps) {
  const theme = useTheme();
  const color = theme['text-basic-color'];
  const text = activeBook.totalPages
    ? `${activeBook.currentPage.toString()} / ${activeBook.totalPages.toString()}`
    : activeBook.currentPage.toString();

  const onSliderChange = (values: number | number[]) => {
    console.log(values, 'value');
    // floor first value to whole numbner
    if (values instanceof Array) {
      let newPage = Math.floor(values[0]);
      console.log(newPage, 'newPage');
      if (newPage < 1) newPage = 1;

      updateActiveBookPage(newPage);
    }
  };

  const trackmarks = activeBook?.bookmarks.map(bm => Number(bm.page));
  console.log(trackmarks, 'markds');

  const renderTrackMarkComponent = (trackMarkNumber: number) => {
    console.log(trackMarkNumber, 'props');
    return <CustomIonIcon name="bookmark" size={15} style={{ color: color }} />;
  };

  // better way to do this?
  const isTablet = Dimensions.get('screen').width > 500;
  console.log(Dimensions.get('screen').width, 'HIGH');

  return (
    <View
      style={{
        // backgroundColor: 'red',
        position: 'absolute',
        alignSelf: 'center',
        bottom: '10%',
        width: Dimensions.get('screen').width * 0.8,
        height: isTablet ? 70 : 60,
        zIndex: 9999,
        // backgroundColor: lightGray,
        backgroundColor: 'white',
        borderColor: color,
        borderWidth: isTablet ? 1 : 1,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MiikaText text={text} category={'p1'} />
      {activeBook.totalPages && (
        <View
          style={{
            width: '95%',
          }}>
          <Slider
            minimumValue={1}
            step={1}
            maximumValue={activeBook.totalPages}
            value={activeBook.currentPage}
            trackMarks={trackmarks}
            // trackClickable={false}
            onValueChange={onSliderChange}
            renderTrackMarkComponent={
              trackmarks.length > 0 ? renderTrackMarkComponent : undefined
            }
            minimumTrackTintColor={color}
            maximumTrackTintColor={color}
            thumbTintColor={color}
            containerStyle={{ height: 20 }}
          />
        </View>
      )}
    </View>
  );
}
