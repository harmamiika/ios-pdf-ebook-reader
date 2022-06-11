import React from 'react';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

export function AdmobBannerAd() {
  return <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />;
}
