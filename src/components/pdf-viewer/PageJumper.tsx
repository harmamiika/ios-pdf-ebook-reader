import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';
import { View } from 'react-native';
import { IBook } from '../../interfaces';
import { MiikaText } from '../reusable/MiikaText';

interface PageJumperProps {
  activeBook: IBook;
  updateActiveBookPage: (page: number) => void;
}

export default function PageJumper({
  activeBook,
  updateActiveBookPage,
}: PageJumperProps) {
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

  const renderTrackMarkComponent = (props: any) => {
    console.log(props, 'props');
    return <View style={{ backgroundColor: 'blue', width: 2, height: 10 }} />;
  };

  return (
    <View
      style={{
        // position: 'absolute',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // left: 0,
        // right: 0,
        backgroundColor: 'red',
        position: 'absolute',
        alignSelf: 'center',
        bottom: '10%',
        width: 300,
        height: 50,
        zIndex: 9999,

        display: 'flex',
        alignItems: 'center',
      }}>
      <MiikaText text={text} />
      {activeBook.totalPages && (
        <View style={{ width: '100%' }}>
          <Slider
            minimumValue={1}
            step={1}
            maximumValue={activeBook.totalPages}
            value={activeBook.currentPage}
            trackMarks={trackmarks}
            trackClickable={false}
            onValueChange={onSliderChange}
            renderTrackMarkComponent={renderTrackMarkComponent}
          />
        </View>
      )}
    </View>
  );
}
