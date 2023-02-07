import React from 'react';
import { Button, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { IBook } from '../../interfaces';
import { useServer } from './useServer';
import { screenHeight, screenWidth } from '../../utils/cssHelpers';
import { LibraryDirectoryPath } from 'react-native-fs';
import EpubHTML from './EpubHTML';

interface EpubViewProps {
  activeBook: IBook;
}

// todos:
// inject javascript to set window.book to serv
/// inject javascript to get current location

export default function EPubWebView({ activeBook }: EpubViewProps) {
  const server: any = useServer(activeBook);
  // inject js to window.book

  const appLocation = `${LibraryDirectoryPath}/${activeBook.file.name}`;
  const fileUri = `file://${appLocation}`;
  const initialJS = `
      window.BOOK_PATH = "${fileUri}";
      `;

  const handleMessage = (event: any) => {
    console.log(event.nativeEvent.data);
  };

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}>
      {server?.url ? (
        <>
          <WebView
            // source={{ uri: server.url }}
            source={{ uri: server.url }}
            // ref={webview}
            style={{
              maginBottom: 20,
              width: screenWidth,
              height: screenHeight,
            }}
            injectedJavaScriptBeforeContentLoaded={initialJS}
            onMessage={handleMessage}
            // originWhitelist={['*']}
            javaScriptEnabled
            mixedContentMode="compatibility"
            // scalesPageToFit={true}
            // allowsInlineMediaPlayback={true}
            // allowFileAccessFromFileURLs
            // allowingReadAccessToURL="https://cdn.jsdelivr.net/npm/epubjs/dist/epub.min.js"
            // allowUniversalAccessFromFileURLs
            // allowFileAccessFromFileURLs
            // allowFileAccess
            onShouldStartLoadWithRequest={event => {
              console.log(event, 'on should start load with request');
              return true;
            }}
            // domStorageEnabled={true}

            // allowFileAccess={true}
          />
          {/* <WebView
            // source={{ uri: server.url }}
            source={{ html: EpubHTML, baseUrl: 'file:///' }}
            // ref={webview}
            style={{
              maginBottom: 20,
              width: screenWidth,
              height: screenHeight,
            }}
            injectedJavaScriptBeforeContentLoaded={initialJS}
            onMessage={handleMessage}
            originWhitelist={['*']}
            javaScriptEnabled
            mixedContentMode="compatibility"
            // scalesPageToFit={true}
            // allowsInlineMediaPlayback={true}
            // allowFileAccessFromFileURLs
            domStorageEnabled
            // allowingReadAccessToURL="https://cdn.jsdelivr.net/npm/epubjs/dist/epub.min.js"
            allowUniversalAccessFromFileURLs
            allowFileAccessFromFileURLs
            allowFileAccess
            onShouldStartLoadWithRequest={event => {
              console.log(event, 'on should start load with request');
              return true;
            }}
            // domStorageEnabled={true}

            // allowFileAccess={true}
          /> */}
          <Button>yo</Button>
          {/* <Button onPress={() => goNext()}>yo</Button>
              <Button onPress={() => goPrevious()}>prev</Button>
              <Button onPress={() => goForward()}>location</Button>
              <Button onPress={() => goEnd()}>end</Button> */}
        </>
      ) : (
        <Text>loading</Text>
      )}
    </View>
  );
}
