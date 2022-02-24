export const responsiveStyle = {
  mobile: {
    rowWidths: { columns: undefined },
    columnWidths: { tablet: 8, mobile: 10 },
    buttonSize: 'mini',
    overlayClass: 'overlay-grid',
    noPaddingBottom: 'no-padding-bottom',
    paddingBottom: '.5em',
  },
  tablet: {
    rowWidths: { columns: undefined },
    columnWidths: { tablet: 8, mobile: 8 },
    buttonSize: 'small',
    overlayClass: 'overlay-grid spaced',
    noPaddingBottom: '',
    paddingBottom: '2em',
  },
  computer: {
    rowWidths: { columns: 'equal' },
    columnWidths: { tablet: undefined, mobile: undefined },
    buttonSize: 'small',
    overlayClass: 'overlay-grid spaced',
    noPaddingBottom: '',
    paddingBottom: '2em',
  },
};
