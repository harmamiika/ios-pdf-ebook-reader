import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getActiveBook,
  getBookList,
  saveActiveBook,
  saveBookList,
} from '../storage/books';

// const getBooks = createAsyncThunk(
//   'books/getBookList',
//   async (state, action) => {
//     const list = await getBookList();
//     console.log(list, 'list');
//     return list;
//   },
// );

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
      saveActiveBook(book);
      state.activeBook = book;
    },
    // async getActiveBook(state, action) {
    //   state.activeBook = await getActiveBook();
    // },
  },
});

export const { addBookToList, setActiveBook } = booksSlice.actions;
export default booksSlice.reducer;
