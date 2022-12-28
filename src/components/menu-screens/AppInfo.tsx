import React from 'react';
import { MiikaText } from '../reusable/MiikaText';
import SimpleScreen from './SimpleScreen';

export default function AppInfo() {
  return (
    <SimpleScreen header="MyPDFBooks">
      <MiikaText
        marginTop={10}
        marginBottom={10}
        text="Read PDF-books and track your progress."
      />
      <MiikaText
        marginBottom={10}
        text="Send feedback or report a bug: mypdfebooks.contact@gmail.com"
      />
      <MiikaText marginBottom={10} text="https://mypdfbooks.vercel.app/" />
      <MiikaText marginBottom={10} text="Version 1.0 - © Miika Härmä 2022" />
    </SimpleScreen>
  );
}
