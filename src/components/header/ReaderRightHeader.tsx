import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../state';
import { addBookmark, deleteBookmark } from '../../state/booksSlice';
import { headerIconSidePadding } from '../../utils/cssHelpers';
import { CustomIonIcon } from '../reusable/CustomIonIcon';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';
import { IconButton, IconType } from '../reusable/IconButton';

interface ReaderRightHeaderProps {
  navigation: any;
}

export const ReaderRightHeader = ({ navigation }: ReaderRightHeaderProps) => {
  const dispatch = useAppDispatch();
  const activeBook = useSelector((state: RootState) => state.books.activeBook);
  const [iconName, setIconName] = useState<string>('ios-bookmarks');

  useEffect(() => {
    const pageHasBookmarks = activeBook?.bookmarks.find(
      b => b.page === activeBook.currentPage,
    );

    if (pageHasBookmarks) {
      setIconName('ios-bookmarks');
    } else if (!pageHasBookmarks) {
      setIconName('ios-bookmarks-outline');
    }
  }, [activeBook]);

  return (
    <View style={styles.container}>
      {activeBook && (
        <IconButton
          iconName={iconName}
          style={styles.leftIcon}
          onPress={() =>
            iconName === 'ios-bookmarks-outline'
              ? dispatch(addBookmark({ id: '', text: '', page: 0 }))
              : dispatch(
                  deleteBookmark(
                    activeBook.bookmarks.find(
                      bm => bm.page === activeBook.currentPage,
                    )?.id!,
                  ),
                )
          }
          iconType={IconType.IonIcon}
          // iconColor="lightgray"
        />
        // 3 different types of bookmars - empty - filled - scroll empty - scroll filled
        // perhaps empty bookmark can be lighter too
      )}
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
    // paddingRight: headerIconSidePadding,
    // paddingBottom: 1,
  },
});
