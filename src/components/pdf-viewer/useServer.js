import React, { useState, useEffect } from 'react';
import { LibraryDirectoryPath } from 'react-native-fs';
import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';

// Start the server
// server.start().then(url => {
//   console.log('Serving at URL', url);
// });

export const useServer = activeBook => {
  const [serverObj, setServerObj] = useState();

  useEffect(() => {
    console.log(
      'EXECUTED',
      activeBook && activeBook.file.type === 'application/pdf',
    );
    if (activeBook && activeBook.file.type === 'application/epub+zip') {
      console.log('EXECURED');

      let path = RNFS.MainBundlePath + '/epub.html';

      let server = new StaticServer(0, path, {
        localOnly: true,
        keepAlive: true,
      });

      console.log(server, 'server');

      server
        .start()
        .then(url => {
          console.log('SERVER STARTEDD,  url:', url);
          setServerObj({ server, url });
        })
        .catch(err => {
          console.log('server error', err);
        });

      server.isRunning().then(isRunning => {
        console.log('isRunning', isRunning);
      });
    }
  }, [activeBook]);

  return serverObj;
};

// // Stop the server
// server.stop();

// // Check if native server running
// const isRunning = await server.isRunning()
// // isRunning - true/false
