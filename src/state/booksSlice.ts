import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { IBook } from '../interfaces';
import {
  getActiveBookFromStorage,
  getBookListFromStorage,
  saveActiveBookToStorage,
  saveBookListToStorage,
} from '../storage/booksStorage';

// Book data model
const createBook = (file: IBook) => ({
  id: uuid.v4().toString(),
  name: file.name.replace(/\.[^/.]+$/, ''),
  file,

  // get pdf page count somehow
  totalPages: undefined,
  currentPage: 1,

  startDate: new Date().toString(),
  finishDate: undefined,
  lastPdfMountTime: undefined,

  isFavorite: false,
  bookmarks: [],
  notes: [],
});

export const getBooks = createAsyncThunk('books/getBookList', async () => {
  return await getBookListFromStorage();
});

export const getActiveBook = createAsyncThunk(
  'books/getActiveBook',
  async () => {
    return await getActiveBookFromStorage();
  },
);

export interface SliceState {
  bookList: IBook[];
  activeBook: IBook | undefined;
}

const initialState: SliceState = {
  bookList: [],
  activeBook: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToList(state, action: PayloadAction<IBook>) {
      const bookList = [...state.bookList, createBook(action.payload)];
      saveBookListToStorage(bookList);
      if (bookList) state.bookList = bookList;
    },
    deleteBook(state, action: PayloadAction<IBook>) {},
    setActiveBook(state, action: PayloadAction<IBook>) {
      const book = action.payload;
      saveActiveBookToStorage(book);
      state.activeBook = book;
    },
    updateActiveBookPage(state, action: PayloadAction<number>) {
      const updatedBook = { ...state.activeBook, currentPage: action.payload };

      state.activeBook = updatedBook as IBook;
      saveActiveBookToStorage(updatedBook);

      const newList = state.bookList.map((b: IBook) =>
        b.id === updatedBook.id ? updatedBook : b,
      );
      state.bookList = newList as IBook[];
      saveBookListToStorage(newList);
    },
  },
  extraReducers: builder => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log(state, 'store state on load');
      state.bookList = action.payload;
    });
    builder.addCase(getActiveBook.fulfilled, (state, action) => {
      console.log(action, 'action');
      state.activeBook = action.payload;
    });
  },
});

export const { addBookToList, setActiveBook, updateActiveBookPage } =
  booksSlice.actions;
export default booksSlice.reducer;
