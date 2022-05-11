import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './books';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
