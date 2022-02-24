export const responsiveStyleMenu = {
  mobile: {
    linkPadding: '1em',
    align: 'center',
  },
  tablet: {
    linkPadding: '2em',
    align: 'center',
  },
  computer: {
    linkPadding: '4em',
    align: 'center',
  },
};

export const getSize = (width: number, modifier = '') => {
  let mobileLimit = 768;
  let tabletLimit = 992;

  switch (modifier) {
    case 'extended':
      mobileLimit = 768 - 150;
      tabletLimit = 992 + 300;
      break;
    default:
      mobileLimit = 768;
      tabletLimit = 992;
      break;
  }
  if (width < mobileLimit) return 'mobile';
  if (width < tabletLimit) return 'tablet';
  return 'computer';
};
