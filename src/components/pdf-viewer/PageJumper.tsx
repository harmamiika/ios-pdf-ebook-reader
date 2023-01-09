import { Slider } from '@miblanchard/react-native-slider';
import { useTheme } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
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

  // todos: asetetele paremmin tabille?
  // muotoile teksti ? tuleeko badgen sisälle?
  // add full screen button? - increase clutter + make things super obvious

  return (
    <View
      style={{
        // backgroundColor: 'red',
        position: 'absolute',
        alignSelf: 'center',
        bottom: '10%',
        width: 300,
        height: 50,
        zIndex: 9999,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
            minimumTrackTintColor={color}
            maximumTrackTintColor={color}
            thumbTintColor={color}
            containerStyle={{ height: 25 }}
          />
        </View>
      )}
    </View>
  );
}
