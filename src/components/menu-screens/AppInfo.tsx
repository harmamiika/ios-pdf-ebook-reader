import React from 'react';
import { MiikaText } from '../reusable/MiikaText';
import SimpleScreen from './SimpleScreen';

export default function AppInfo() {
  return (
    <SimpleScreen header="PDF Book Reader">
      <MiikaText text="Version 1.0, 2022" />
      {/* <MiikaText text="Created with <3 by Miika Härmä" /> */}
      {/* <MiikaText text="Web site: " />
      <MiikaText text="In app store" />
      <MiikaText text="email" /> */}
    </SimpleScreen>
  );
}
