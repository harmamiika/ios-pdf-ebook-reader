import { RootState } from './store';
import { createThumbnail } from './../utils/createThumbnail';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import uuid from 'react-native-uuid';
import {
  IBook,
  IBookmark,
  ICategory,
  IFile,
  IThumbnail,
} from './../interfaces';
import { DocumentPickerResponse } from 'react-native-document-picker';

// Book data model
const createBook = (file: IFile, thumbnail?: IThumbnail): IBook => ({
  id: uuid.v4().toString(),
  name: file.name.replace(/\.[^/.]+$/, ''),
  file,
  uri: file.fileCopyUri,

  thumbnail: thumbnail || { uri: undefined, width: 0, height: 0 },
  // get pdf page count somehow
  totalPages: undefined,
  currentPage: 1,

  startDate: new Date().toString(),
  finishDate: undefined,
  lastPdfMountTime: undefined,

  bookmarks: [],
  categories: [],
});

const createBookmark = (
  bookmark: IBookmark,
  currentPage: number,
): IBookmark => ({
  id: uuid.v4().toString(),
  page: currentPage,
  text: bookmark.text,
  // color: 'black',
});

function addUpdatedBookToState(
  state: WritableDraft<SliceState>,
  updatedBook: IBook,
) {
  state.activeBook = updatedBook as IBook;
  const newList = state.bookList.map((b: IBook) =>
    b.id === updatedBook.id ? updatedBook : b,
  );
  state.bookList = newList as IBook[];
}

export interface SliceState {
  activeBook: IBook | undefined;
  bookList: IBook[];
  categoriesList?: ICategory[];
}

const initialState: SliceState = {
  activeBook: undefined,
  bookList: [],
  categoriesList: [],
};

// PERFORMANCE IMPROVEMENT - ONLY UPDATE LIST WHEN ACTIVE BOOK SWITCHES OUT?

export const addNewBook = createAsyncThunk(
  'books/addBook',
  async (file: DocumentPickerResponse) => {
    let thumbnail;
    if (file.fileCopyUri) {
      thumbnail = await createThumbnail(file.fileCopyUri);
    }
    return { file, thumbnail };
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBookToList(state, action: PayloadAction<IFile>) {
    //   const bookList = [...state.bookList, createBook(action.payload)];
    //   if (bookList) state.bookList = bookList;
    // },
    deleteBook(state, action: PayloadAction<IBook>) {
      const newBookList = state.bookList.filter(
        b => b.id !== action.payload.id,
      );
      state.bookList = newBookList;
    },
    setActiveBook(state, action: PayloadAction<IBook>) {
      const id = action.payload;
      state.activeBook = id;
    },
    updateActiveBookPage(state, action: PayloadAction<number>) {
      const updatedBook = { ...state.activeBook, currentPage: action.payload };
      addUpdatedBookToState(state, updatedBook as IBook);
    },
    addBookmark(state, action: PayloadAction<IBookmark>) {
      const activeBook = state.activeBook;
      if (activeBook?.bookmarks.find(b => b.page === activeBook.currentPage))
        return;
      const bookmark = createBookmark(
        action.payload,
        activeBook?.currentPage || 1,
      );
      const updatedBook = {
        ...activeBook,
        bookmarks: activeBook?.bookmarks.concat(bookmark),
      };
      addUpdatedBookToState(state, updatedBook as IBook);
    },
  },
  extraReducers: builder => {
    builder.addCase(addNewBook.fulfilled, (state, action) => {
      const file = action.payload.file as IFile;
      // if no file file => exit create at some point
      // also can clean up the code above
      const bookList = [
        ...state.bookList,
        createBook(file, action.payload.thumbnail || undefined),
      ];
      console.log(
        createBook(file, action.payload.thumbnail || undefined).thumbnail,
        'thumbnail',
      );
      if (bookList) state.bookList = bookList;
    });
  },
});

export const {
  // addBookToList,
  setActiveBook,
  deleteBook,
  updateActiveBookPage,
  addBookmark,
} = booksSlice.actions;
export default booksSlice.reducer;
