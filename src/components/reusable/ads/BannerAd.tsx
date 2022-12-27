import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

export function AdmobBannerAd({ adUnitId }: { adUnitId: string }) {
  const unitId = __DEV__ ? TestIds.BANNER : adUnitId;

  return (
    <View style={s.adContainer}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={unitId}
        onAdLoaded={e => {
          console.log('Ad loaded: ', e);
        }}
        onAdFailedToLoad={e => {
          console.log('Ad failed to load: ', e);
        }}
      />
    </View>
  );
}

const s = StyleSheet.create({
  adContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    // position: 'absolute',
    // bottom: 0,
    // opacity: 0,
  },
});
