import React from 'react';
import { MiikaText } from '../reusable/MiikaText';
import SimpleScreen from './SimpleScreen';

export default function AppInfo() {
  return (
    <SimpleScreen header="App info">
      <MiikaText text="Mybookpdf 2022" />
      <MiikaText text="Created with <3 by Miika Härmä" />
      <MiikaText text="Web site: " />
      <MiikaText text="In app store" />
      <MiikaText text="email" />
    </SimpleScreen>
  );
}
