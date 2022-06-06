import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import {
  getActiveBookFromStorage,
  getBookListFromStorage,
  saveActiveBookToStorage,
  saveBookListToStorage,
} from '../storage/booksStorage';

// Book data model
const createBook = file => ({
  id: uuid.v4(),
  name: file.name.replace(/\.[^/.]+$/, ''),
  file,

  // get pdf page count somehow
  totalPages: undefined,
  currentPage: 1,

  startDate: new Date().toString(),
  finishDate: undefined,
  lastPDFMountTime: undefined,

  bookmarks: [],
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

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    bookList: [],
    activeBook: {},
  },
  reducers: {
    addBookToList(state, action) {
      const bookList = [...state.bookList, createBook(action.payload)];
      saveBookListToStorage(bookList);
      state.bookList = bookList;
    },
    setActiveBook(state, action) {
      const book = action.payload;
      saveActiveBookToStorage(book);
      state.activeBook = book;
    },
    updateActiveBookPage(state, action) {
      const updatedBook = { ...state.activeBook, currentPage: action.payload };

      state.activeBook = updatedBook;
      saveActiveBookToStorage(updatedBook);

      const newList = state.bookList.map(b =>
        b.id === updatedBook.id ? updatedBook : b,
      );
      state.bookList = newList;
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
