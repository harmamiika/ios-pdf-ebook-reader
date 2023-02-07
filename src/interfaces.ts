export interface IBook {
  id: string;
  name: string;
  file: IFile;
  thumbnail: IThumbnail;
  // MINIMIZE THIS
  uri: string;

  epubPages?: any[];

  copyFile: {};

  totalPages: number | undefined;
  currentPage: number;

  startDate: string;
  finishDate: string | undefined;

  categories: ICategory[];
  bookmarks: IBookmark[];

  // unused but can exist in memory
  lastPdfMountTime: string | undefined;

  // Oli v1ssä, kuitenkin turha koska library path muuttuu
  // copyFileUri: string;
}
// TODO: Author?

export interface IEPubPageInfo {
  page: number;
  cfi: string | undefined;
  percentage: number | undefined;
  currentLocation: {
    atEnd?: boolean;
    end?: any;
    start?: any;
    // & more
  };
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IBookmark {
  id: string;
  page: number;
  text: string;
  color?: string;
}

export interface IFile {
  name: string;
  fileCopyUri: string;
  uri: string;
  size: number;
  type: string;
}

export interface IThumbnail {
  uri: string | undefined;
  width: number;
  height: number;
  originalUri?: string | undefined;
}
