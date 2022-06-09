export interface IBook {
  id: string;
  name: string;
  file: IFile;

  totalPages: number;
  currentPage: number;

  startDate: string | Date;
  finishDate: string | Date;
  lastPdfMountTime: string | Date;

  isFavorite: boolean;
  bookmarks: [];
}
// TODO: Author?

export interface IFile {
  name: string;
}
