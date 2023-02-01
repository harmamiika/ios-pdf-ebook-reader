import React from 'react';
import { Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state';
import { addNewBook } from '../../state/booksSlice';
import { IconButton, IconType } from '../reusable/IconButton';

export const FilePicker = () => {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state: RootState) => state.books);

  const getFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        // type: [DocumentPicker.types.pdf, 'application/pdf', 'com.adobe.epub-container'],
        type: [
          // DocumentPicker.types.pdf,
          DocumentPicker.types.allFiles,
          // 'application/pdf',
          // 'com.adobe.epub-container',
        ],
        // DocumentPicker.types.allFiles
        copyTo: 'cachesDirectory',
        // mode: 'import'
      });

      if (
        res[0].type !== 'application/pdf' &&
        res[0].type !== 'application/epub+zip'
      ) {
        Alert.alert('Only pdf and epub files are supported');
      } else if (bookList.find(b => b.file.name === res[0].name)) {
        console.log('duplicate file');
        console.log(res[0], 'ress');
        Alert.alert('Book with this filename already exists');
      } else {
        // success case
        console.log(res[0], 'resssRESS');
        // @ts-ignore
        dispatch(addNewBook(res[0]));
      }
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
      } else {
        //For Unknown Errorgit
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const gap = 12;

  const childStyle = {
    marginHorizontal: gap / 2,
  };

  return (
    <IconButton
      iconName="plus"
      onPress={() => getFile()}
      iconType={IconType.FontAwesome5Icon}
      iconSize={27}
      style={{
        ...childStyle,
        marginRight: gap * 1.5,
      }}
    />
  );
};
