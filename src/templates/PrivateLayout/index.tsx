import React, { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import PrivateHeader from '@components/Headers/PrivateHeader';
import PrivateFooter from '@components/Footers/PrivateFooter';
import { PrivateLayoutProps } from './interfaces';
import Head from 'next/head';

const PrivateLayout: FC<PrivateLayoutProps> = ({ children, title, imageUrl, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageUrl && <meta name="og:image" content={imageUrl} />}
      </Head>
      <Grid padded>
        <Grid.Row stretched className="no-padding-y">
          <Grid.Column className="no-padding-x">
            <nav>
              <PrivateHeader />
            </nav>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="no-padding-y">
          <Grid.Column style={{ minHeight: '70vh', paddingRight: 0, paddingLeft: 0 }}>
            <main>{children}</main>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <PrivateFooter />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default PrivateLayout;
