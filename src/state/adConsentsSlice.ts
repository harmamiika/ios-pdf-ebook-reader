import mobileAds, {
  AdsConsent,
  AdsConsentStatus,
} from 'react-native-google-mobile-ads';

export async function InitializeAds() {
  const adapterStatuses = await mobileAds().initialize();
  console.log(adapterStatuses, 'adapter statuses');
  const consentInfo = await AdsConsent.requestInfoUpdate();
  console.log(consentInfo, 'consentInfo');

  if (
    consentInfo.isConsentFormAvailable &&
    consentInfo.status === AdsConsentStatus.REQUIRED
  ) {
    const { status } = await AdsConsent.showForm();
    console.log(status, 'status');
  }

  //   AdsConsent.reset();

  //   const {
  //     activelyScanDeviceCharacteristicsForIdentification,
  //     applyMarketResearchToGenerateAudienceInsights,
  //     createAPersonalisedAdsProfile,
  //     createAPersonalisedContentProfile,
  //     developAndImproveProducts,
  //     measureAdPerformance,
  //     measureContentPerformance,
  //     selectBasicAds,
  //     selectPersonalisedAds,
  //     selectPersonalisedContent,
  //     storeAndAccessInformationOnDevice,
  //     usePreciseGeolocationData,
  //   } = await AdsConsent.getUserChoices();
}
