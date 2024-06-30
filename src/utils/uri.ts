// export const PDFFileCopyUriSearchString = '/tmp/com.app.librarian-Inbox/';
export const PDFFileCopyUriSearchString = '/Documents/';
export const thumbnailUriSearchString = '/Library/Caches/';
export const PDFCopyUri = '/Documents/';

export function createAppUri(
  originalUri: string,
  searchString: string,
  noTilde?: boolean,
) {
  // mkdir('/Pdfs');

  const indexOf = originalUri.indexOf(searchString);
  const uriSlice = originalUri.slice(indexOf);

  if (noTilde) return uriSlice;
  return '~' + uriSlice;
}

// export enum UriSearchStringType {
//   PDF = 'PDF',
//   THUMBNAIL = 'THUMBNAIL',
// }

// const getFileName = (originalUri: string, searchString: string) => {
//   const indexOf = originalUri.indexOf(searchString);
//   const uriSlice = originalUri.slice(indexOf);
// };

// export function createCurrentUri(originalUri: string, uriType: UriType) {
//   // const url = LibraryDirectoryPath + '/Caches/' + fileName;

//   return;
// }
