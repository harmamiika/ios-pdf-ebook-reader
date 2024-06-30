import React from 'react';
import { StyledText } from '../reusable/StyledText';
import SimpleScreen from './SimpleScreen';

export default function AppInfo() {
  return (
    <SimpleScreen header="MyPDFBooks">
      <StyledText
        marginTop={10}
        marginBottom={10}
        text="Read PDF-books and track your progress."
      />
      <StyledText
        marginBottom={10}
        text="Send feedback or report a bug: mypdfebooks.contact@gmail.com"
      />
      <StyledText marginBottom={10} text="https://mypdfbooks.vercel.app/" />
      <StyledText marginBottom={10} text="Version 1.2.0 - © 2023 Miika Härmä" />
      <StyledText marginBottom={10} text="Made in Finland" />
    </SimpleScreen>
  );
}
