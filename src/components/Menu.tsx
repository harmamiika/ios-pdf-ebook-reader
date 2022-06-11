import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdmobBannerAd } from './BannerAd';
import { GambaAd } from './GAMBannerAd';

export const Menu = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>menu</Text>
      <AdmobBannerAd />
      <GambaAd />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
