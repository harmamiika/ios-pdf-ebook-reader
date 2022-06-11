import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import uuid from 'react-native-uuid';
import { IBook, IBookmark, ICategory, IFile } from './../interfaces';

// Book data model
const createBook = (file: IFile): IBook => ({
  id: uuid.v4().toString(),
  name: file.name.replace(/\.[^/.]+$/, ''),
  file,
  uri: file.fileCopyUri,

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

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToList(state, action: PayloadAction<IFile>) {
      const bookList = [...state.bookList, createBook(action.payload)];
      if (bookList) state.bookList = bookList;
    },
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
});

export const {
  addBookToList,
  setActiveBook,
  deleteBook,
  updateActiveBookPage,
  addBookmark,
} = booksSlice.actions;
export default booksSlice.reducer;
