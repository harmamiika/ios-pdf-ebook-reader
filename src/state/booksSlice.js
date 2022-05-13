import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getActiveBookFromStorage,
  getBookListFromStorage,
  saveActiveBookToStorage,
  saveBookListToStorage,
} from '../storage/booksStorage';

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
      const bookList = [...state.bookList, action.payload];
      saveBookListToStorage(bookList);
      state.bookList = bookList;
    },
    setActiveBook(state, action) {
      const book = action.payload;
      saveActiveBookToStorage(book);
      state.activeBook = book;
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

export const { addBookToList, setActiveBook } = booksSlice.actions;
export default booksSlice.reducer;
