export interface IBook {
  id: string;
  name: string;
  file: IFile;

  totalPages: number;
  currentPage: number;

  startDate: string | Date;
  finishDate: string | Date;
  lastPdfMountTime: string | Date;

  bookmarks: [];
  notes: [];
}

export interface IFile {
  name: string;
}
