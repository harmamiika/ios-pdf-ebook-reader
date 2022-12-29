/**
 * @format
 */

import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { Appearance, AppRegistry } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { name as appName } from './app.json';
import Library from './src/components/book-list/Library';
import { LibraryIcon } from './src/components/header/LibraryIcon';
import { ReaderRightHeader } from './src/components/header/ReaderRightHeader';
import { Menu } from './src/components/menu/Menu';
import PdfViewer from './src/components/pdf-viewer/PdfViewer';
import { store } from './src/state/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InitializeAds } from './src/utils/adConsents';

import { LogBox } from 'react-native';
import LibraryLeftHeader from './src/components/book-list/LibraryLeftHeader';
import LibraryRightHeader from './src/components/book-list/LibraryRightHeader';
import AppInfo from './src/components/menu-screens/AppInfo';
import Settings from './src/components/menu-screens/Settings';
import UserGuide from './src/components/menu-screens/UserGuide';
import { MiikaText } from './src/components/reusable/MiikaText';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const { Navigator, Screen } = createNativeStackNavigator();

const Application = () => {
  const activeBookTitle = useSelector(state => state.books.activeBook?.name);
  const activeBookId = useSelector(state => state.books.activeBook?.id);
  const pdfViewerIsFullScreen = useSelector(
    state => state.pdfViewer.isFullScreen,
  );

  useEffect(() => {
    InitializeAds();
  }, []);

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Library"
          component={Library}
          options={({ navigation }) => ({
            headerLeft: () => <LibraryLeftHeader navigation={navigation} />,
            headerRight: () => <LibraryRightHeader navigation={navigation} />,
            headerTitle: props => (
              <MiikaText {...props} category="h5" text={'Library'} />
            ),
          })}
        />
        <Screen
          name="Reading view"
          component={PdfViewer}
          navigationKey={activeBookId || 'default'}
          options={({ navigation }) => ({
            headerShown: !pdfViewerIsFullScreen,
            headerLeft: () => <LibraryIcon navigation={navigation} />,
            headerRight: props => (
              <ReaderRightHeader navigation={navigation} {...props} />
            ),
            headerTitle: props => (
              <MiikaText
                {...props}
                category="h5"
                // todo: track device width and adjust text size accordingly
                text={
                  activeBookTitle?.length < 19
                    ? `${activeBookTitle}`
                    : activeBookTitle
                    ? `${activeBookTitle?.substring(0, 19)}...`
                    : 'Welcome'
                }
              />
            ),
          })}
        />
        <Screen
          name="Menu"
          component={Menu}
          options={{
            headerTitle: props => (
              <MiikaText {...props} category="h5" text={'Menu'} />
            ),
          }}
        />
        <Screen name="Settings" component={Settings} />
        <Screen
          name="App info"
          component={AppInfo}
          options={() => ({
            headerTitle: props => (
              <MiikaText {...props} category="h5" text={'App info'} />
            ),
          })}
        />
        <Screen name="UserGuide" component={UserGuide} />
      </Navigator>
    </NavigationContainer>
  );
};

const Root = () => {
  // AsyncStorage.clear();

  const colorScheme = Appearance.getColorScheme();
  console.log(colorScheme, 'color shcmee');
  const persistor = persistStore(store);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Application />
        </PersistGate>
      </Provider>
    </ApplicationProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
