import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    // get booksit db / json
    bookList: [],
    activeBook: {},
  },
  reducers: {
    addBookToList(state, action) {
      state.bookList = [...state.bookList, action.payload];
    },
    setActiveBook(state, action) {
      state.activeBook = action.payload;
    },
  },
});

export const { addBookToList, setActiveBook } = booksSlice.actions;
export default booksSlice.reducer;
