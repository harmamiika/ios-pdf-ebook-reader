import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveBookListToStorage = async books => {
  try {
    await AsyncStorage.setItem('bookList', JSON.stringify(books));
    // const bookListFromStore = await AsyncStorage.getItem('bookList');
    // console.log(bookListFromStore, 'from storage');
  } catch (e) {
    // saving error
    // set error
  }
};

export const getBookListFromStorage = async () => {
  try {
    const bookList = await AsyncStorage.getItem('bookList');
    // console.log(bookList, 'get FORM storage');
    return bookList !== null ? JSON.parse(bookList) : [];
  } catch (e) {
    //
  }
};

export const saveActiveBookToStorage = async activeBook => {
  try {
    await AsyncStorage.setItem('activeBook', JSON.stringify(activeBook));
  } catch (e) {
    // saving error
    // set error
  }
};

export const getActiveBookFromStorage = async () => {
  try {
    const activeBook = await AsyncStorage.getItem('activeBook');
    // console.log(activeBook, 'activeBook from storeage');
    return activeBook !== null ? JSON.parse(activeBook) : {};
  } catch (e) {
    //
  }
};
