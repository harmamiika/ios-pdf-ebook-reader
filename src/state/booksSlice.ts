import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { DocumentPickerResponse } from 'react-native-document-picker';
import RNFS, {
  CachesDirectoryPath,
  copyFile,
  DocumentDirectoryPath,
  ExternalDirectoryPath,
  ExternalStorageDirectoryPath,
  FileOptions,
  LibraryDirectoryPath,
  mkdir,
  moveFile,
} from 'react-native-fs';
import uuid from 'react-native-uuid';
import { createAppUri, PDFFileCopyUriSearchString } from '../utils/uri';
import {
  IBook,
  IBookmark,
  ICategory,
  IFile,
  IThumbnail,
} from './../interfaces';
import { createThumbnail } from './../utils/createThumbnail';
import { createBook } from './createBook';
const meme: FileOptions = {};

const createPdfCopy = async (file: IFile) => {
  console.log('CREATING');
  await mkdir(DocumentDirectoryPath + '/PDFS').catch(e =>
    console.log(e, 'DIR CREATE ERR'),
  );

  const res = await copyFile(
    file.fileCopyUri,
    // 'file://' +
    CachesDirectoryPath + '/PDFS',
  ).catch(e => console.log('errRORO IN CREATE', e));
  console.log(res, 'IT SAVED');
};

// documentDirectoryPath ? libraryDirectoryPath?

const savePdf = async (file: IFile) => {
  // console.log(RNFS.getAllExternalFilesDirs(), 'ALL PATHS');

  const { name, fileCopyUri } = file;
  console.log(name, 'name');
  const newPath = `${LibraryDirectoryPath}/${name}`;
  console.log(newPath, 'newPath');
  await copyFile(fileCopyUri, newPath).catch(e => console.log(e, 'err öäöäöä'));
};

// etsi downloadsfolderin hex koodi
// tai sitten createe directory ja lue sieltä

export const removeFileExtension = (fileName: string) => {
  return fileName.replace(/\.[^/.]+$/, '');
};

const createBookmark = (
  bookmark: IBookmark,
  currentPage: number,
): IBookmark => ({
  id: uuid.v4().toString(),
  page: currentPage,
  text: bookmark.text,
  // color: 'black',
});

function addUpdatedBookToState(
  state: WritableDraft<SliceState>,
  updatedBook: IBook,
) {
  state.activeBook = updatedBook as IBook;
  const newList = state.bookList.map((b: IBook) =>
    b.id === updatedBook.id ? updatedBook : b,
  );
  state.bookList = newList as IBook[];
}

export interface SliceState {
  activeBook: IBook | undefined;
  bookList: IBook[];
  categoriesList?: ICategory[];
}

const initialState: SliceState = {
  activeBook: undefined,
  bookList: [],
  categoriesList: [],
};

// PERFORMANCE IMPROVEMENT - ONLY UPDATE LIST WHEN ACTIVE BOOK SWITCHES OUT?

export const addNewBook = createAsyncThunk(
  'books/addBook',
  async (file: DocumentPickerResponse) => {
    let thumbnail;
    if (file.fileCopyUri) {
      thumbnail = await createThumbnail(file.fileCopyUri);
    }
    // await createPdfCopy(file as IFile);
    await savePdf(file as IFile);

    return { file, thumbnail };
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // BOOKS
    deleteBook(state, action: PayloadAction<IBook>) {
      const newBookList = state.bookList.filter(
        b => b.id !== action.payload.id,
      );
      state.bookList = newBookList;
    },
    setActiveBook(state, action: PayloadAction<IBook>) {
      const book = action.payload;
      state.activeBook = book;
    },
    updateActiveBookPage(state, action: PayloadAction<number>) {
      const updatedBook = { ...state.activeBook, currentPage: action.payload };
      addUpdatedBookToState(state, updatedBook as IBook);
    },
    // BOOKMARKS
    addBookmark(state, action: PayloadAction<IBookmark>) {
      const activeBook = state.activeBook;
      if (activeBook?.bookmarks.find(b => b.page === activeBook.currentPage))
        return;
      const bookmark = createBookmark(
        action.payload,
        activeBook?.currentPage || 1,
      );
      const updatedBook = {
        ...activeBook,
        bookmarks: activeBook?.bookmarks.concat(bookmark),
      };
      addUpdatedBookToState(state, updatedBook as IBook);
    },
    deleteBookmark(state, action: PayloadAction<string>) {
      const updatedBookmarks = state.activeBook?.bookmarks.filter(
        bm => bm.id !== action.payload,
      );
      addUpdatedBookToState(state, {
        ...state.activeBook,
        bookmarks: updatedBookmarks || [],
      } as IBook);
    },
  },
  extraReducers: builder => {
    builder.addCase(addNewBook.fulfilled, (state, action) => {
      const file = action.payload.file as IFile;
      // if no file file => exit create at some point
      // also can clean up the code above
      const bookList = [
        ...state.bookList,
        createBook(file, action.payload.thumbnail || undefined),
      ];
      console.log(
        createBook(file, action.payload.thumbnail || undefined).thumbnail,
        'thumbnail',
      );
      state.bookList = bookList;
      // if first book, make automatically active
      if (bookList.length === 1) setActiveBook(bookList[0]);
    });
  },
});

export const {
  // addBookToList,
  setActiveBook,
  deleteBook,
  updateActiveBookPage,
  addBookmark,
  deleteBookmark,
} = booksSlice.actions;
export default booksSlice.reducer;
