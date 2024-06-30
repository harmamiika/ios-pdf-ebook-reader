import RNFS, {
  CachesDirectoryPath,
  LibraryDirectoryPath,
  unlink,
} from 'react-native-fs';

// EVErything exept thumbnails are removed (to empty garbage from before too)
export const clearCacheDir = async () => {
  console.log(CachesDirectoryPath, 'CACHE PATH VARIABLE');
  console.log(LibraryDirectoryPath + '/Caches/', 'created way');

  RNFS.readdir(LibraryDirectoryPath + '/Caches/').then((res: any) => {
    console.log(res, 'library dir contetns after pdf delete');
    const items = res;
    console.log(items, 'items');

    items.forEach(async (item: any) => {
      const url = LibraryDirectoryPath + '/Caches/' + item;
      if (!item.includes('.jpg')) {
        await unlink(url);
      }
    });
  });
};
