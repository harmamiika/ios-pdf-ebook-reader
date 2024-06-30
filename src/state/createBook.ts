import { LibraryDirectoryPath } from 'react-native-fs';
import uuid from 'react-native-uuid';
import { IBook, IFile, IThumbnail } from '../interfaces';
import { removeFileExtension } from './booksSlice';

// Book data creator!
export const createBook = (file: IFile, thumbnail?: IThumbnail): IBook => ({
  id: uuid.v4().toString(),
  name: removeFileExtension(file.name),
  // uri: `file://${DocumentDirectoryPath}/CC8E13F0-CD04-4D0F-9109-1EA51AEC56C8/${file.name}`,
  uri: `${LibraryDirectoryPath}/${file.name}`,
  copyFile: {},

  thumbnail: thumbnail || {
    uri: undefined,
    width: 0,
    height: 0,
  },

  file,

  // get pdf page count somehow
  totalPages: undefined,
  currentPage: 1,

  startDate: new Date().toString(),
  finishDate: undefined,
  lastPdfMountTime: undefined,

  bookmarks: [],
  categories: [],

  // V1 legacy
  // copyFileUri: `${LibraryDirectoryPath}/${file.name}`,
});
