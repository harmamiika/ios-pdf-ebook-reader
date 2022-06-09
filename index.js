/**
 * @format
 */

import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { LibraryIcon } from './src/components/header/LibraryIcon';
import { LibraryRightHeader } from './src/components/header/LibraryRightHeader';
import { PlusIcon } from './src/components/header/PlusIcon';
import Library from './src/components/Library';
import { Menu } from './src/components/Menu';
import PdfViewer from './src/components/PdfViewer';
import { getActiveBook, getBooks } from './src/state/booksSlice';
import { store } from './src/state/store';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const { Navigator, Screen } = createNativeStackNavigator();

const Application = () => {
  const dispatch = useDispatch();
  const activeBookTitle = useSelector(state => state.books.activeBook?.name);

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getActiveBook());
  }, []);

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="PdfViewer"
          component={PdfViewer}
          options={({ navigation }) => ({
            headerLeft: () => <LibraryIcon navigation={navigation} />,
            headerRight: () => <LibraryRightHeader navigation={navigation} />,
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
        <Screen
          name="App"
          component={App}
          options={{
            headerRight: PlusIcon,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const Root = () => {
  // AsyncStorage.clear();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <Application />
      </Provider>
    </ApplicationProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
