import React from 'react';
import Image from 'next/image';
import styles from '@styles/LoginHeader.module.css';
import { Grid } from 'semantic-ui-react';

const LOGO =
  'https://s3.amazonaws.com/tuclick.stage/DEMO/logos/siclikSuscribe.png';

const LoginHeader = () => {
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Grid verticalAlign="middle" textAlign="center" padded>
        <Grid.Row className={styles['menu-bar']}>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={16}
            largeScreen={16}
            widescreen={16}
          >
            <Image src={LOGO} alt="Logo" width={300} height={150} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </header>
  );
};

export default LoginHeader;
