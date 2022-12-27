import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { screenWidth, screenHeight } from '../../utils/cssHelpers';
import { AdmobBannerAd } from '../reusable/ads/BannerAd';
import MiikaMenuItem from './MiikaMenuItem';

interface IMenuItem {
  text: string;
  onPress: () => void;
}

export const Menu = ({
  navigation,
}: NativeStackScreenProps<any>): JSX.Element => {
  const menuItems: IMenuItem[] = [
    // {
    //   text: 'User guide',
    //   onPress: () => navigation.navigate('UserGuide'),
    // },
    // {
    //   text: 'Settings',
    //   onPress: () => navigation.navigate('Settings'),
    // },
    {
      text: 'App info',
      onPress: () => navigation.navigate('App info'),
    },
    // {
    //   text: 'Library',
    //   onPress: () => {},
    // },
    // {
    //   text: 'Read',
    //   onPress: () => {},
    // },
    // {
    //   text: 'Feedback',
    //   onPress: () => {},
    // },
    // {
    //   text: 'Updgrade to premium',
    //   onPress: () => {},
    // },
    // {
    //   text: 'Refer a friend',
    //   onPress: () => {},
    // },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        {menuItems?.map((item: IMenuItem, index: number) => (
          <MiikaMenuItem text={item.text} onPress={item.onPress} key={index} />
        ))}
      </View>
      <AdmobBannerAd />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignContent: 'flex-end',
  },
  list: {
    flex: 1,
    // width: screenWidth,
    // height: screenHeight,
  },
});
