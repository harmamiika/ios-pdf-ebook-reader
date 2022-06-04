import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

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
