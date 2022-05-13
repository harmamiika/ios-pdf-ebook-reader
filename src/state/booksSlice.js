import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getActiveBook,
  getBookList,
  saveActiveBook,
  saveBookList,
} from '../storage/booksStorage';

export const getBooks = createAsyncThunk('books/getBookList', async () => {
  return await getBookList();
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    // get booksit db / json
    bookList: [],
    activeBook: {},
  },
  reducers: {
    addBookToList(state, action) {
      const bookList = [...state.bookList, action.payload];
      saveBookList(bookList);
      state.bookList = bookList;
    },
    setActiveBook(state, action) {
      const book = action.payload;
      // saveActiveBook(book);
      state.activeBook = book;
    },
    // async getActiveBook(state, action) {
    //   state.activeBook = await getActiveBook();
    // },
    // async getAllBooks(state, action) {
    //   state.bookList = await getBookList();
    // },
  },
  extraReducers: builder => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.bookList = action.payload;
    });
  },
});

export const { addBookToList, setActiveBook, getAllBooks } = booksSlice.actions;
export default booksSlice.reducer;
