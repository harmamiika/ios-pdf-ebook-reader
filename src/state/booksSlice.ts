import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { copyFile, LibraryDirectoryPath, unlink } from 'react-native-fs';
import uuid from 'react-native-uuid';
import { createThumbnail, removeThumbnail } from '../utils/thumbnails';
import { IBook, IBookmark, ICategory, IFile } from './../interfaces';
import { createBook } from './createBook';

const savePdf = async (file: IFile) => {
  // todo: add check if there is space on device
  const { name, fileCopyUri } = file;
  console.log(name, 'name');
  const newPath = `${LibraryDirectoryPath}/${name}`;

  console.log(newPath, 'newPath');
  try {
    await copyFile(fileCopyUri, newPath);
    return newPath;
  } catch (e) {
    console.log(e, 'err');
    return undefined;
  }
};

const deletePdfCopy = async (book: IBook) => {
  const { copyFileUri } = book;
  try {
    await unlink(copyFileUri);
  } catch (e) {
    console.log(e, 'err');
  }
};

export const removeFileExtension = (fileName: string) =>
  fileName.replace(/\.[^/.]+$/, '');

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

export const deleteBook = createAsyncThunk(
  'books/removeBook',
  async (book: IBook) => {
    if (book.thumbnail.uri) await removeThumbnail(book.thumbnail.uri);
    await deletePdfCopy(book);

    // if book is active, set active book to undefined
    // get active book from redux state
    return book;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // BOOKS
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
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      const newBookList = state.bookList.filter(
        b => b.id !== action.payload.id,
      );
      state.bookList = newBookList;
      // if active book is deleted, set active book to undefined
      if (state.activeBook?.id === action.payload.id) {
        state.activeBook = undefined;
      }
    });
  },
});

export const {
  // addBookToList,
  setActiveBook,
  updateActiveBookPage,
  addBookmark,
  deleteBookmark,
} = booksSlice.actions;
export default booksSlice.reducer;
