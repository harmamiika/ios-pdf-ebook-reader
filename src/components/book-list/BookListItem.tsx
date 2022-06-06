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

// const createBook = file => ({
//   id: uuidv4(),
//   name: file.fileName,
//   // huom
//   file,

//   currentPage: 1,

//   // get form file
//   totalPages: 0,

//   startDate: new Date(),
//   finishDate: ,

//   bookmarks: [],
// });

interface BookListItemProps {
  book: IBook;
}

// rewritee ui kitten cardeilla
// tee overflow menusta komponentti
// oikeastaan cardia voi komponentittaa headeriin ja contenttiinkin + containter

// SELECTED CARD - ADD STATUS

export default function BookListItem({ book }: BookListItemProps) {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState();
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  console.log(book, 'book book');

  // const onItemPress = () => {
  //   console.log('press');
  //   dispatch(setActiveBook(book));
  // };

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
      status="basic">
      {' '}
    </Button>
  );

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeading}>
        <Text style={styles.title}>{book.name}</Text>
      </View>
      <View style={styles.itemBottomSide}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.pages}>
            {book.currentPage} /{' '}
            {`Page ${book?.currentPage} / ${book?.totalPages || '?'}`}
          </Text>
        </View>
        <View style={styles.rightSideIconContainer}>
          {/* <View style={styles.overflowMenuWrapper}> */}
          <OverflowMenu
            anchor={renderToggleButton}
            visible={menuIsVisible}
            selectedIndex={selectedIndex}
            onSelect={onItemSelect}
            onBackdropPress={() => setMenuIsVisible(false)}>
            <MenuItem title="Users" />
            <MenuItem title="Orders" />
            <MenuItem title="Transactions" />
          </OverflowMenu>
          {/* </View> */}
        </View>
      </View>
    </View>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  itemContainer: {
    width: screenWidth,
    height: screenHeight / 5,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  itemHeading: {
    width: '100%',
    height: '25%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  itemBottomSide: {
    flexBasis: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {},
  rightSideIconContainer: {},
  title: {
    fontSize: screenHeight / 30,
    paddingLeft: screenWidth / 100,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  pages: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  description: {},
  rightSideIcon: {},
  menuButton: {
    // backgroundColor: 'gray',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 2,
  },
});

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
