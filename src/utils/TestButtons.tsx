import React from 'react';
import { Button, Text } from '@ui-kitten/components';
import { LibraryDirectoryPath, readdir } from 'react-native-fs';
import { clearCacheDir } from './clearCacheDir';
import { useSelector } from 'react-redux';
import { RootState } from '../state';

export default function TestButtons() {
  const activeBook = useSelector((state: RootState) => state.books.activeBook);

  return (
    <>
      <Button onPress={() => clearCacheDir()}>
        <Text>yo</Text>
      </Button>
      <Button
        onPress={() => {
          readdir(LibraryDirectoryPath).then((res: any) => {
            console.log(res, 'library dir contetns onClick');
          });
        }}>
        <Text>view library</Text>
      </Button>

      <Button
        onPress={() => {
          readdir(LibraryDirectoryPath + '/Caches/').then((res: any) => {
            console.log(res, 'library caches dir contetns onClick');
          });
        }}>
        <Text>view dir logs</Text>
      </Button>

      <Button
        // log active book.file
        onPress={() => {
          console.log('active book file', activeBook?.file);
        }}>
        <Text>log active book file</Text>
      </Button>
    </>
  );
}
