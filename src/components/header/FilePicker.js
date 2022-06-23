import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToList, addNewBook } from '../../state/booksSlice';

import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';
import { IconButton } from '../reusable/IconButton';

export const FilePicker = () => {
  const dispatch = useDispatch();
  const { bookList } = useSelector(state => state.books);

  const getFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        // DocumentPicker.types.allFiles
        copyTo: 'documentDirectory',
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      console.log(res, 'res2');

      // FIXAA TÄMÄ
      if (!bookList.find(b => b.name === res[0].name)) {
        dispatch(addNewBook(res[0]));
      } else {
        console.log('duplicate file');
      }
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Errorgit
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
      name={'plus'}
      onPress={() => getFile()}
      iconType={1}
      iconSize={27}
      style={childStyle}
    />
  );
};
