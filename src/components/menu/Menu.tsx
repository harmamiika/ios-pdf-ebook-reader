import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdmobBannerAd } from '../reusable/ads/BannerAd';
import { GambaAd } from '../reusable/ads/GAMBannerAd';

export const Menu = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>menu</Text>
      <AdmobBannerAd />
      <GambaAd />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
