import { createSlice } from '@reduxjs/toolkit';

interface PdfViewerState {
  isFullScreen: boolean;
}

const initialState: PdfViewerState = {
  isFullScreen: false,
};

export const pdfViewerSlice = createSlice({
  name: 'pdfViewer',
  initialState,
  reducers: {
    toggleFullScreen: state => {
      state.isFullScreen = !state.isFullScreen;
    },
  },
});

export const { toggleFullScreen } = pdfViewerSlice.actions;
export default pdfViewerSlice.reducer;
