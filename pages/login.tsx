import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Grid } from 'semantic-ui-react';
import LoginLayout from '@templates/LoginLayout';
import LoginForm from '@components/Login';

const Login: NextPage = () => {
  return (
    <LoginLayout>
      <div>
        <Head>
          <title>Login</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid padded>
          <Grid.Row centered>
            <Grid.Column
              largeScreen={16}
              computer={16}
              tablet={16}
              mobile={16}
              textAlign="center"
            >
              <LoginForm />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              largescreen={8}
              computer={8}
              tablet={12}
              mobile={15}
              textAlign="center"
              className="padding-y"
            >
              <Link href="/">
                <a className="primary"> ¿Olvidaste tu contraseña?</a>
              </Link>
            </Grid.Column>
            <Grid.Column
              largescreen={8}
              computer={8}
              tablet={12}
              mobile={15}
              textAlign="center"
              className="padding-y"
            >
              <Link href="/">
                <a className="primary"> ¿Olvidaste tu contraseña?</a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </LoginLayout>
  );
};

export default Login;