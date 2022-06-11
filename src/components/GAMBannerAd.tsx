import React from 'react';
import {
  GAMBannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.GAM_BANNER : '/xxx/yyyy';

export function GambaAd() {
  return (
    <GAMBannerAd
      unitId={adUnitId}
      sizes={[BannerAdSize.FULL_BANNER]}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}
