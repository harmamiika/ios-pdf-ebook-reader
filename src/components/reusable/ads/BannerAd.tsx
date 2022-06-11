import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

export function AdmobBannerAd() {
  return (
    <View style={s.adContainer}>
      <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
    </View>
  );
}

const s = StyleSheet.create({
  adContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
});
