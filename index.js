/**
 * @format
 */

import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { AppRegistry, Appearance } from 'react-native';
import mobileAds from 'react-native-google-mobile-ads';
import { Provider, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { name as appName } from './app.json';
import Library from './src/components/book-list/Library';
import { LibraryIcon } from './src/components/header/LibraryIcon';
import { LibraryRightHeader } from './src/components/header/LibraryRightHeader';
import { PlusIcon } from './src/components/header/FilePicker';
import { Menu } from './src/components/menu/Menu';
import PdfViewer from './src/components/pdf-viewer/PdfViewer';
import { store } from './src/state/store';

// import AsyncStorage from '@react-native-async-storage/async-storage';

async function InitializeAds() {
  const adapterStatuses = await mobileAds().initialize();
  console.log(adapterStatuses, 'adapter statuses');

  // .then(adapterStatuses => {
  //   console.log(adapterStatuses, 'adapter statuses');
  //   // Initialization complete!
  // });
}

import { LogBox } from 'react-native';
import Settings from './src/components/menu-screens/Settings';
import AppInfo from './src/components/menu-screens/AppInfo';
import UserGuide from './src/components/menu-screens/UserGuide';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const { Navigator, Screen } = createNativeStackNavigator();

const Application = () => {
  const activeBookTitle = useSelector(state => state.books.activeBook?.name);

  useEffect(() => {
    InitializeAds();
  }, []);

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="PdfViewer"
          component={PdfViewer}
          options={({ navigation }) => ({
            headerLeft: () => <LibraryIcon navigation={navigation} />,
            headerRight: props => (
              <LibraryRightHeader navigation={navigation} {...props} />
            ),
            title: activeBookTitle || 'Book',
          })}
          // headerRight: LibraryIcon,
        />
        <Screen
          name="Library"
          component={Library}
          options={({ navigation }) => ({
            headerRight: () => <PlusIcon />,
          })}
        />
        <Screen
          name="Menu"
          component={Menu}
          // options={{
          //   headerLeft: LibraryIcon,
          // }}
        />
        <Screen name="Settings" component={Settings} />
        <Screen name="AppInfo" component={AppInfo} />
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
