import AsyncStorage from '@react-native-async-storage/async-storage';

const storeKey = '@storage_Key';

export const saveBookList = async books => {
  try {
    await AsyncStorage.setItem('bookList', JSON.stringify(books));
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
