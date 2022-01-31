import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';
import { Button, Grid } from 'semantic-ui-react';
import LoginLayout from '@templates/LoginLayout';
import { GetServerSideProps } from 'next';

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <LoginLayout>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            {' '}
            {providers
              ? Object.values(providers).map((provider: any) => {
                  console.log('Provier', provider);
                  if (provider.id !== 'email') {
                    return (
                      <div key={provider.name}>
                        <div>
                          <Button onClick={() => signIn(provider.id)}>
                            {provider.name}
                          </Button>
                        </div>
                      </div>
                    );
                  }
                })
              : ''}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </LoginLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
export default SignIn;
