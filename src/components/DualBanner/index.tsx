import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { BannerProps, DualBannerProps } from './interfaces';

import styles from './DualBanner.module.css';

const DualBanner = ({ elements }: DualBannerProps) => {
  return (
    <Grid.Row centered className={`${styles.padding_btw_text} ${styles.general_padding_children}`}>
      {elements.map((banner: BannerProps) => {
        const { mobile, tablet, web, id } = banner;
        return (
          <Grid.Column key={id} style={{ paddingBottom: '25px' }} largeScreen={8} computer={8} tablet={16} mobile={16} textAlign="center">
            <Image alt="No image" style={{ cursor: 'pointer' }} fluid src={mobile} srcSet={`${mobile} 360w,${tablet} 768w,${web} 1920w`} />
          </Grid.Column>
        );
      })}
    </Grid.Row>
  );
};

export default DualBanner;
