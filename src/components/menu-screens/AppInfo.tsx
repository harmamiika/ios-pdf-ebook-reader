import React from 'react';
import { MiikaText } from '../reusable/MiikaText';
import SimpleScreen from './SimpleScreen';

export default function AppInfo() {
  return (
    <SimpleScreen header="Book reader">
      {/* <MiikaText text="Version 1.0, 2022" /> */}
      <MiikaText text="Read PDF-ebooks and track your progress." />
      {/* <MiikaText text="Web site: " />
      <MiikaText text="In app store" />
      <MiikaText text="email" /> */}
    </SimpleScreen>
  );
}
