/**
 * @format
 */

import * as eva from '@eva-design/eva';
import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import PdfViewer from './src/components/PdfViewer';
import Library from './src/components/Library';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/state/store';
import { getBooks, getActiveBook } from './src/state/booksSlice';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlusIcon } from './src/components/header/PlusIcon';
const { Navigator, Screen } = createNativeStackNavigator();

const Application = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getActiveBook());
  }, []);

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="App"
          component={App}
          options={{
            headerRight: PlusIcon,
          }}
        />
        <Screen name="PdfViewer" component={PdfViewer} />
        <Screen name="Library" component={Library} />
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
