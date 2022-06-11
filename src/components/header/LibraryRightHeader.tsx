import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../state';
import { addBookmark } from '../../state/booksSlice';
import { CustomIonIcon } from '../reusable/CustomIonIcon';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';

interface LibraryRightHeaderProps {
  navigation: any;
}

export const LibraryRightHeader = ({ navigation }: LibraryRightHeaderProps) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <CustomIonIcon
        name="bookmark"
        style={styles.leftIcon}
        onPress={() => dispatch(addBookmark({ id: '', text: '', page: 0 }))}
      />
      <FontAwesome5Icon
        name="bars"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  leftIcon: {
    paddingRight: 21,
  },
});
