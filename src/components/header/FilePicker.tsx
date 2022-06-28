import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state';
import { addNewBook } from '../../state/booksSlice';

import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';
import { IconButton } from '../reusable/IconButton';

export const FilePicker = () => {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state: RootState) => state.books);

  const getFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        // DocumentPicker.types.allFiles
        copyTo: 'documentDirectory',
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res[0].uri);
      console.log('Type : ' + res[0].type);
      console.log('File Name : ' + res[0].name);
      console.log('File Size : ' + res[0].size);
      //Setting the state to show single file attributes
      console.log(res, 'res2');

      // FIXAA TÄMÄ
      if (bookList.find(b => b.file.name === res[0].name)) {
        console.log('duplicate file');
        console.log(res[0], 'ress');
        // @ts-ignore
        alert('Book with this filename already exists');
      } else {
        console.log(res[0], 'resssRESS');
        // HUOM
        // @ts-ignore
        dispatch(addNewBook(res[0]));
      }
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
      } else {
        //For Unknown Errorgit
        // @ts-ignore
        alert('Unknown Error: ' + JSON.stringify(err));
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
      iconType={1}
      iconSize={27}
      style={childStyle}
    />
  );
};
