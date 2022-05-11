import {createSlice} from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    // get booksit db / json
    bookList: [],
    activeBook: {},
  },
  reducers: {
    setBooklist(state, action) {
      state.bookList = [...state.bookList, action.payload];
    },
  },
});

export const {setBooklist} = booksSlice.actions;
export default booksSlice.reducer;
