export interface IBook {
  id: string;
  name: string;
  file: IFile;

  totalPages: number | undefined;
  currentPage: number;

  startDate: string | Date;
  finishDate: string | Date | undefined;
  lastPdfMountTime: string | Date | undefined;

  isFavorite: boolean;
  bookmarks: any[];
}
// TODO: Author?

export interface IFile {
  name: string;
}

export interface IDeleteModal {
  isVisible: boolean;
  book: IBook | undefined;
}
