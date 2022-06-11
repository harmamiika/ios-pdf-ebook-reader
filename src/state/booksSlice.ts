import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { IBook, IBookmark, ICategory, IFile } from './../interfaces';

// Book data model
const createBook = (file: IFile): IBook => ({
  id: uuid.v4().toString(),
  name: file.name.replace(/\.[^/.]+$/, ''),
  file,
  uri: file.fileCopyUri,

  // get pdf page count somehow
  totalPages: undefined,
  currentPage: 1,

  startDate: new Date().toString(),
  finishDate: undefined,
  lastPdfMountTime: undefined,

  bookmarks: [],
  categories: [],
});

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

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToList(state, action: PayloadAction<IFile>) {
      const bookList = [...state.bookList, createBook(action.payload)];
      if (bookList) state.bookList = bookList;
    },
    deleteBook(state, action: PayloadAction<IBook>) {
      const newBookList = state.bookList.filter(
        b => b.id !== action.payload.id,
      );
      state.bookList = newBookList;
    },
    setActiveBook(state, action: PayloadAction<IBook>) {
      const id = action.payload;
      state.activeBook = id;
    },
    updateActiveBookPage(state, action: PayloadAction<number>) {
      const updatedBook = { ...state.activeBook, currentPage: action.payload };

      state.activeBook = updatedBook as IBook;

      const newList = state.bookList.map((b: IBook) =>
        b.id === updatedBook.id ? updatedBook : b,
      );
      state.bookList = newList as IBook[];
    },
    addBookmark(
      state,
      action: PayloadAction<{ book: IBook; bookmark: IBookmark }>,
    ) {},
  },
});

export const {
  addBookToList,
  setActiveBook,
  deleteBook,
  updateActiveBookPage,
} = booksSlice.actions;
export default booksSlice.reducer;
