import { mkdir } from 'react-native-fs';

// export const PDFFileCopyUriSearchString = '/tmp/com.app.librarian-Inbox/';
export const PDFFileCopyUriSearchString = '/Documents/';
export const thumbnailUriSearchString = '/Library/Caches/';
export const PDFCopyUri = '/Documents/';

export function createAppUri(originalUri: string, searchString: string) {
  // mkdir('/Pdfs');

  const indexOf = originalUri.indexOf(searchString);
  const uriSlice = originalUri.slice(indexOf);
  return '~' + uriSlice;
}

// export function getAppUri(uri: string) {
//   return;
// }
