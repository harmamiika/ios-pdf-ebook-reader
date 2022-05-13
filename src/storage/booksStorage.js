import AsyncStorage from '@react-native-async-storage/async-storage';

const storeKey = '@storage_Key';

export const saveBookList = async books => {
  try {
    const res = await AsyncStorage.setItem('bookList', JSON.stringify(books));
    console.log(books, 'books');
    console.log(res, 'res from async sotre');
  } catch (e) {
    // saving error
    // set error
  }
};

export const getBookList = async () => {
  try {
    const bookList = await AsyncStorage.getItem('bookList');
    return bookList !== null ? JSON.parse(bookList) : [];
  } catch (e) {
    //
  }
};

export const saveActiveBook = async activeBook => {
  try {
    await AsyncStorage.setItem('activeBook', JSON.stringify(activeBook));
  } catch (e) {
    // saving error
    // set error
  }
};

export const getActiveBook = async () => {
  try {
    const activeBook = await AsyncStorage.getItem('activeBook');
    return activeBook !== null ? JSON.parse(bookList) : {};
  } catch (e) {
    //
  }
};
