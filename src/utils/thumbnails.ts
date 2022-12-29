import { unlink } from 'react-native-fs';
import PdfThumbnail from 'react-native-pdf-thumbnail';
import { createAppUri, thumbnailUriSearchString } from './uri';

export const createThumbnail = async (path: string) => {
  try {
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
  await unlink(path).catch(e => console.log(e, 'err'));
};
