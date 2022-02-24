import React from 'react';
import { useTranslation } from 'next-i18next';
import { Grid } from 'semantic-ui-react';
import LinkedMenuItem from './LinkedMenuItem';
import { MenuProps } from './interfaces';

const Menu = ({ linkPadding }: MenuProps) => {
  const { t } = useTranslation('menu');

  return (
    <Grid padded textAlign="left" verticalAlign="middle" centered>
      <Grid.Row className="no-padding-y" centered>
        <Grid.Column className="no-padding-x" textAlign="center" mobile={5} tablet={5} computer={3} largeScreen={2} widescreen={2}>
          <LinkedMenuItem linkTo="/" padding={linkPadding} label={t('home')} />
        </Grid.Column>

        <Grid.Column className="no-padding-x" textAlign="center" mobile={6} tablet={5} computer={4} largeScreen={2} widescreen={2}>
          <LinkedMenuItem linkTo="/products" padding={linkPadding} label={t('products')} />
        </Grid.Column>

        {/* {isAuthenticated && ( */}
        {/* <Grid.Column className="no-padding-x" textAlign="center" mobile={5} tablet={5} computer={3} largeScreen={2} widescreen={2}>
          <LinkedMenuItem linkTo="/lo" padding={linkPadding} label={t('home')} />
        </Grid.Column> */}
        {/* // )} */}
      </Grid.Row>
    </Grid>
  );
};

export default Menu;
