import { useTheme } from '@ui-kitten/components';
import { format } from 'date-fns';
import React from 'react';
import { View } from 'react-native';
import { IBook } from '../../interfaces';
import { CustomIonIcon } from '../reusable/CustomIonIcon';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';
import { MiikaText } from '../reusable/MiikaText';

interface StartedReadingProps {
  book: IBook;
}

export default function StartedReading({ book }: StartedReadingProps) {
  const theme = useTheme();
  const iconColor = theme['text-basic-color'];

  const renderStartedReading = () => {
    if (!book.startDate) return <MiikaText text={`Not yet started reading.`} />;
    else if (book.startDate && book.finishDate)
      return (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome5Icon
            name="check"
            style={{ paddingRight: 20 }}
            size={16}
            color={iconColor}
          />

          <View>
            <MiikaText text={`Read: `} />

            <MiikaText
              text={`${format(new Date(book.startDate), 'd.M.y')} - ${format(
                new Date(book.finishDate),
                'd.M.y',
              )}`}
              marginBottom={15}
              category={'p2'}
            />
          </View>
        </View>
      );
    else
      return (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CustomIonIcon
            name="ios-calendar-sharp"
            style={{ paddingRight: 20 }}
            size={16}
            color={iconColor}
          />

          <View>
            <MiikaText text={`Started reading: `} />
            <MiikaText
              text={`${format(new Date(book.startDate), 'd.M.y')}`}
              marginBottom={15}
              category={'p2'}
            />
          </View>
        </View>
      );
  };
  return <View>{renderStartedReading()}</View>;
}
