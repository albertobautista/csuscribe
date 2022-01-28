import React from 'react';
// import Image from 'next/image';
import { Button, Grid } from 'semantic-ui-react';

import styles from '@styles/LoginHeader.module.css';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

// import { useTranslation } from 'react-i18next';

// const LOGO =
//   'https://s3.amazonaws.com/tuclick.stage/DEMO/logos/siclikSuscribe.png';
// const LOGO = '';

const PublicHeader = () => {
  const { locales, locale } = useRouter();
  const { data: session, status } = useSession();
  // const loading = status === 'loading';

  // console.log('LoginHeader locales', locales);
  console.log('LoginHeader status', status);
  console.log('LoginHeader status', status);

  // const { t } = useTranslation(['common']);

  // Locales aren't configured
  if (locales == undefined || locale == undefined) {
    return null;
  }
  // if (status === 'loading') {
  //   return null;
  // }
  // if (session == null) {
  //   return <Button onClick={() => signIn()}>Iniciar sesion</Button>;
  // }

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Grid verticalAlign="middle" textAlign="center" padded>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={16}
            largeScreen={16}
            widescreen={16}
          >
            {!session && (
              <>
                <span className={styles.notSignedInText}>
                  You are not signed in
                </span>
                <a
                  href={`/api/auth/signin`}
                  className={styles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <>
                <span
                  style={{ backgroundImage: `url(${session.user.image})` }}
                  className={styles.avatar}
                />
                <span className={styles.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.email || session.user.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}

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
    </header>
  );
};

export default PublicHeader;
