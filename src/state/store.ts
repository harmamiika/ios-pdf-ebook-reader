import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import booksReducer from './booksSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import pdfReducer from './pdfViewerSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  pdfViewer: pdfReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // possible blacklist here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); //

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
