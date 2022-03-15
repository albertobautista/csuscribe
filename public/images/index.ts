const bucket = process.env.NEXT_PUBLIC_URL_AWS_BUCKET;
const assetUrl = `${bucket}/imagesV2/`;

export const bannerData = [
  {
    title: 'Banner1',
    background: {
      web: `${assetUrl}banners/banner3_web.png`,
      tablet: `${assetUrl}banners/banner3_tablet.png`,
      mobile: `${assetUrl}banners/banner3_movil.png`,
    },
    points: [],
  },
  {
    title: 'Banner2',
    background: {
      web: `${assetUrl}banners/banner4_web.png`,
      tablet: `${assetUrl}banners/banner4_tablet.png`,
      mobile: `${assetUrl}banners/banner4_movil.png`,
    },
    points: [],
  },
];

export const brands = [
  {
    imageWeb: `${assetUrl}brands/Office.png`,
    text: 'Office 365',
    redirect: 'office',
  },
  {
    imageWeb: `${assetUrl}brands/Exchange.png`,
    text: 'Exchange',
    redirect: 'exchange',
  },
  {
    imageWeb: `${assetUrl}brands/Project.png`,
    text: 'Project',
    redirect: 'project',
  },
  {
    imageWeb: `${assetUrl}brands/Dynamics.png`,
    text: 'Dynamics',
    redirect: 'dynamics',
  },
  {
    imageWeb: `${assetUrl}brands/Visio.png`,
    text: 'Visio',
    redirect: 'visio',
  },
  {
    imageWeb: `${assetUrl}brands/Intune.png`,
    text: 'Intune',
    redirect: 'intune',
  },
];

export const dualBanner = [
  {
    id: 1,
    name: 'Necesitas ayuda',
    web: `${assetUrl}dual_banners/dual1_web.png`,
    tablet: `${assetUrl}dual_banners/dual1_tablet.png`,
    mobile: `${assetUrl}dual_banners/dual1_mobile.png`,
    action: { type: 'redirect', value: 'https://google.com' },
  },
  {
    id: 2,
    name: 'Outlet',
    web: `${assetUrl}dual_banners/dual2_web.png`,
    tablet: `${assetUrl}dual_banners/dual2_tablet.png`,
    mobile: `${assetUrl}dual_banners/dual2_mobile.png`,
    action: { type: 'redirect', value: 'https://google.com' },
  },
];
