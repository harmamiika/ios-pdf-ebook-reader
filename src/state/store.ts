import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import booksReducer from './booksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>(); //

// interface Books {
//   bookList: Book[]
//   currentbook: Book
//   readBooks: Book
// }

// interface UserInfo {
//   loggedinTimes: number
//   userId: string
//   userType: UserType
//   settings {

//   }
// }

// interface Settings {
//   pdfControls: ENUM
//   colorScheme: ENUM
//   useNotification: ENUM
// }

// enum UserType {
//   regular,
//   premium,
//   super
// }
