export interface IBook {
  id: string;
  name: string;
  file: IFile;
  thumbnail: IThumbnail;
  // MINIMIZE THIS
  uri: string;

  totalPages: number | undefined;
  currentPage: number;

  startDate: string;
  finishDate: string | undefined;
  lastPdfMountTime: string | undefined;

  categories: ICategory[];
  bookmarks: IBookmark[];
}
// TODO: Author?

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
