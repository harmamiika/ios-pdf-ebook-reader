import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setActiveBook } from '../../state/booksSlice';
import {
  Text,
  Button,
  Divider,
  List,
  ListItem,
  MenuItem,
  OverflowMenu,
} from '@ui-kitten/components';
import { IBook } from '../../interfaces';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';

interface OverflowMenuButtonProps {}

export default function OverflowMenuButton({}: OverflowMenuButtonProps) {
  const [selectedIndex, setSelectedIndex] = useState();
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  const onItemSelect = (index: any) => {
    setSelectedIndex(index);
    setMenuIsVisible(false);
  };

  const renderMenuIcon = () => (
    <FontAwesome5Icon
      name="ellipsis-v"
      color="rgba(0, 0, 0, 0.54)"
      onPress={() => setMenuIsVisible(true)}
      // style={{ color: 'red' }}
    />
  );

  const renderToggleButton = () => (
    <Button
      style={styles.menuButton}
      onPress={() => setMenuIsVisible(true)}
      accessoryRight={renderMenuIcon}
      status="basic"></Button>
  );

  return (
    <View style={styles.rightSideIconContainer}>
      {/* <View style={styles.overflowMenuWrapper}> */}
      <OverflowMenu
        anchor={renderToggleButton}
        visible={menuIsVisible}
        selectedIndex={selectedIndex}
        onSelect={onItemSelect}
        onBackdropPress={() => setMenuIsVisible(false)}>
        <MenuItem title="Favourite" />
        <MenuItem title="Mark as read" />
        <MenuItem title="Delete" />
      </OverflowMenu>
      {/* </View> */}
    </View>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  rightSideIconContainer: {},
  rightSideIcon: {},
  menuButton: {
    // backgroundColor: 'gray',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: screenWidth / 50,
    margin: 2,
  },
});
