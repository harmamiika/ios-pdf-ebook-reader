import React from 'react';
import { View } from 'react-native';
import { MiikaText } from '../reusable/MiikaText';
import Paragraph from './Paragraph';
import SimpleScreen from './SimpleScreen';

const BulletPoint = ({ text }: { text: string }) => (
  <MiikaText marginBottom={5} text={`• ${text}`} />
);

export default function UserGuide() {
  return (
    <SimpleScreen header="MyPDFBooks" isScrollable>
      <Paragraph title="How to use the app">
        <BulletPoint text="You can add books to your library by pressing the plus icon in the top right corner." />
        <BulletPoint
          text="You must have the book in your phones storage already, the app does
          not download books."
        />
        <BulletPoint text="You can download books from the internet and then add them to the app." />
        <BulletPoint text="Books have to be in PDF format, for example EPUB files are currently not supported." />
      </Paragraph>

      <Paragraph title="Reading view">
        <BulletPoint text="Enter/exit full screen - tap in the middle." />
        {/* <BulletPoint text="To switch page, swipe left or right, or tap side of the screen." />
        <BulletPoint text="Zoom. Pinch fingers to zoom in the center." />
        <BulletPoint text="Bookmarks. Tap the bookmark icon to add a bookmark." /> */}
      </Paragraph>

      <Paragraph title="Finding books in your phones storage">
        <BulletPoint text="The books can be found inside of your phones storage, or in your ICloud drive." />
        <BulletPoint text="Typical locations include, for example: Downloads and Documents inside ICloud drive." />
        <BulletPoint
          text="You can go back to the root of your phones storage by pressing the back button in the top left corner
      and find the book by navigating forward from there."
        />
        <BulletPoint
          text="When you browse storage through this app, only PDF-files are visible. 
        If you are sure you are in a correct location, but can't see the file, it is possible the format of the file is currently unsupported."
        />
      </Paragraph>

      {/* <Paragraph title="The reading view is not working">
        <BulletPoint text="If the reading view is not working, it is possible you have added a PDF that is not supported by the app." />
        <BulletPoint text="To fix this, you should remove the book from your library." />
        <BulletPoint text="It is possible that the PDFs filename contains unsupported special characters, you can try renaming the file to fix this." />
        <BulletPoint text="It is also possible that the PDF is corrupted, in which case you should try downloading the file again." />
        <BulletPoint text="You can also report any bug at: mypdfbooks.contact@gmail.com." />
        <View style={{ height: 100 }} />
      </Paragraph> */}
    </SimpleScreen>
  );
}
