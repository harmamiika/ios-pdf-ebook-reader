// export const PDFFileCopyUriSearchString = '/tmp/com.app.librarian-Inbox/';
export const PDFFileCopyUriSearchString = '/Documents/';
export const thumbnailUriSearchString = '/Library/Caches/';
export const PDFCopyUri = '/Pdfs/';

export function createAppUri(originalUri: string, searchString: string) {
  const indexOf = originalUri.indexOf(searchString);
  const uriSlice = originalUri.slice(indexOf);
  return '~' + uriSlice;
}
