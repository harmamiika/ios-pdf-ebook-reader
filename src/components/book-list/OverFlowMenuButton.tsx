import { Button, MenuItem, OverflowMenu } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { IBook } from '../../interfaces';
import { deleteBook } from '../../state/booksSlice';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';
import DeleteModal from './DeleteModal';

interface OverflowMenuButtonProps {
  book: IBook;
}

export default function OverflowMenuButton({ book }: OverflowMenuButtonProps) {
  const dispatch = useDispatch();
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  const onItemSelect = (index: any) => {
    // setSelectedIndex(index);
    setMenuIsVisible(false);
  };

  // get blue theme color from somewhere
  const renderMenuIcon = () => (
    <FontAwesome5Icon
      name="ellipsis-v"
      onPress={() => setMenuIsVisible(true)}
    />
  );

  const renderToggleButton = () => (
    <Button
      style={styles.menuButton}
      onPress={() => setMenuIsVisible(true)}
      accessoryRight={renderMenuIcon}
      status="basic"></Button>
  );

  const [deleteModalIsVisible, setDeleteModalIsVisible] =
    useState<boolean>(false);

  return (
    <View style={styles.menuButtonContainer}>
      <OverflowMenu
        anchor={renderToggleButton}
        visible={menuIsVisible}
        onSelect={onItemSelect}
        onBackdropPress={() => setMenuIsVisible(false)}>
        {/* <MenuItem
          accessoryLeft={() => <FontAwesome5Icon name="star" size={16} />}
          title="Favourite"
        /> */}
        {/* <MenuItem
          accessoryLeft={() => <FontAwesome5Icon name="check" size={16} />}
          title="Mark as read"
        /> */}
        <MenuItem
          title="Remove"
          accessoryLeft={() => <FontAwesome5Icon name="trash-alt" size={16} />}
          onPress={() =>
            // dispatch(showDeleteModal({ isVisible: true, book }))
            setDeleteModalIsVisible(true)
          }
        />
      </OverflowMenu>
      <DeleteModal
        deleteBook={book => dispatch(deleteBook(book))}
        isVisible={deleteModalIsVisible}
        setIsVisible={setDeleteModalIsVisible}
        book={book}
      />
    </View>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  menuButtonContainer: {},
  menuButton: {
    alignSelf: 'flex-end',
    width: screenWidth / 50,
    margin: 2,
    backgroundColor: 'white',
    borderColor: 'white',
  },
});
