import { LibraryDirectoryPath, unlink } from 'react-native-fs';
import PdfThumbnail from 'react-native-pdf-thumbnail';
import { createAppUri, thumbnailUriSearchString } from './uri';

export const createThumbnail = async (path: string) => {
  try {
    // add compression
    const { uri, width, height } = await PdfThumbnail.generate(path, 0);
    // console.log(uri, width, height);
    return {
      uri: createAppUri(uri, thumbnailUriSearchString),
      width,
      height,
      originalUri: uri,
    };
  } catch (e) {
    console.log('thumbnail creation error');
  }
};

export const removeThumbnail = async (path: string) => {
  console.log(path, 'path');
  // get just the filename from the path
  const fileName = path.split('/').pop();

  try {
    const url = LibraryDirectoryPath + '/Caches/' + fileName;
    // const url2 = createAppUri(path, thumbnailUriSearchString);
    // console.log(url2, 'url2');
    // await logUrlExists(decodeURIComponent(url));
    await unlink(decodeURIComponent(url));
    console.log('REMOVED SUCCESSFLULLY THUMBNAIL');
  } catch (e) {
    console.log(e, 'err in thumbnail unlink');
  }
};
