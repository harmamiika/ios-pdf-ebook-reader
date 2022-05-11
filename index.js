/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
// import PdfViewer from './components/PdfViewer';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
        {/* <Stack.Screen name="PdfViewer" component={<PdfViewer />} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Root);
