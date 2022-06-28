import PdfThumbnail from 'react-native-pdf-thumbnail';

export const createThumbnail = async (path: string) => {
  try {
    const { uri, width, height } = await PdfThumbnail.generate(path, 0);
    console.log(uri, width, height);
    return { uri, width, height };
  } catch (e) {
    console.log('thumbnail creation error');
  }
};
