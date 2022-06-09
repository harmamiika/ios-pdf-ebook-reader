import { Button, MenuItem, OverflowMenu } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';

interface OverflowMenuButtonProps {}

export default function OverflowMenuButton({}: OverflowMenuButtonProps) {
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState();
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  const onItemSelect = (index: any) => {
    setSelectedIndex(index);
    setMenuIsVisible(false);
  };

  // get blue theme color from somewhere
  const renderMenuIcon = () => (
    <FontAwesome5Icon
      name="ellipsis-v"
      color="rgba(0, 0, 0, 0.54)"
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

  return (
    <View style={styles.menuButtonContainer}>
      <OverflowMenu
        anchor={renderToggleButton}
        visible={menuIsVisible}
        selectedIndex={selectedIndex}
        onSelect={onItemSelect}
        onBackdropPress={() => setMenuIsVisible(false)}>
        <MenuItem
          accessoryLeft={() => <FontAwesome5Icon name="star" size={16} />}
          title="Favourite"
        />
        <MenuItem
          accessoryLeft={() => <FontAwesome5Icon name="check" size={16} />}
          title="Mark as read"
        />
        <MenuItem
          title="Delete"
          accessoryLeft={() => <FontAwesome5Icon name="trash-alt" size={16} />}
        />
      </OverflowMenu>
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
