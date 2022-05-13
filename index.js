/**
 * @format
 */

import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import PdfViewer from './src/components/PdfViewer';
import Menu from './src/components/Menu';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/state/store';
import { getActiveBook, getBookList } from './src/storage/books';

const Stack = createNativeStackNavigator();

const Application = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getBookList());
    // dispatch(getActiveBook());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Root = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
