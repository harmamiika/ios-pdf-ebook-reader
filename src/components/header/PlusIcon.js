import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToList } from '../../state/booksSlice';

import { FontAwesome5Icon } from '../reusable/FontAwesome5Icon';

export const PlusIcon = () => {
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

      if (!bookList.find(b => b.name === res.name)) {
        dispatch(addBookToList(res[0]));
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

  return <FontAwesome5Icon name={'plus'} onPress={() => getFile()} />;
};
