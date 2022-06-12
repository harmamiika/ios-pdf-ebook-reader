import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { screenWidth, screenHeight } from '../../utils/cssHelpers';
import { AdmobBannerAd } from '../reusable/ads/BannerAd';
import MiikaMenuItem from './MiikaMenuItem';

interface IMenuItem {
  text: string;
  onPress: () => void;
}

export const Menu = (): JSX.Element => {
  const menuItems: IMenuItem[] = [
    {
      text: 'Settings',
      onPress: () => {},
    },
    {
      text: 'App info',
      onPress: () => {},
    },
    // {
    //   text: 'Library',
    //   onPress: () => {},
    // },
    // {
    //   text: 'Read',
    //   onPress: () => {},
    // },
    {
      text: 'Feedback',
      onPress: () => {},
    },
    {
      text: 'Updgrade to premium',
      onPress: () => {},
    },
    {
      text: 'Refer a friend',
      onPress: () => {},
    },
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
