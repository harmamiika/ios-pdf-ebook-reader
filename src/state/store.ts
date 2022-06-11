import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import booksReducer from './booksSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  books: booksReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
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
