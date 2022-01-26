import React from 'react';
import Image from 'next/image';
import { Button, Grid } from 'semantic-ui-react';
import styles from '@styles/LoginHeader.module.css';
import { useRouter } from 'next/router';
// import { useTranslation } from 'react-i18next';

const LOGO =
  'https://s3.amazonaws.com/tuclick.stage/DEMO/logos/siclikSuscribe.png';
// const LOGO = '';

const LoginHeader = () => {
  const { locales, locale } = useRouter();
  console.log('LoginHeader locales', locales);
  console.log('LoginHeader locale', locale);

  // const { t } = useTranslation(['common']);

  // Locales aren't configured
  if (locales == undefined || locale == undefined) {
    return null;
  }

  return (
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
      <Grid.Row>
        <Grid.Column
          mobile={16}
          tablet={16}
          computer={16}
          largeScreen={16}
          widescreen={16}
        >
          {locales.map((loc) => (
            <form
              action="/api/language"
              method="POST"
              key={loc}
              className="inline-block"
            >
              <input name="preferredLocale" value={loc} type="hidden"></input>
              <Button
                className={loc === locale ? 'redText' : 'backgroundBlue'}
                type="submit"
              >
                {loc}
              </Button>
            </form>
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LoginHeader;
