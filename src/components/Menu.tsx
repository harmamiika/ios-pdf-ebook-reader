import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdmobBannerAd } from './BannerAd';

export const Menu = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>menu</Text>
      <AdmobBannerAd />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
