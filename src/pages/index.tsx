import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PrivateLayout from '@templates/PrivateLayout';
import { Grid, Responsive, ResponsiveProps } from 'semantic-ui-react';
import { Title } from '@components/Title';
import InformationSection from '@components/InformationSection';
import BrandsList from '@components/BrandsList';
import { getSize } from '@components/Headers/PrivateHeader/utils';
import DualBanner from '@components/DualBanner';
import Carousel from '@components/Carousel';
import { bannerData, brands, dualBanner } from '../../public/images';
// import { useSession, signIn, signOut } from 'next-auth/react';
const BANNERWIDTH = 1920;
const BANNERHEIGHT = 650;
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!)),
  },
});
const Home: NextPage = () => {
  const [device, setDevice] = useState<'computer' | 'tablet' | 'mobile'>('computer');
  const handleOnUpdate = (e: React.SyntheticEvent<HTMLElement>, { width }: ResponsiveProps) => {
    const device = getSize(width);
    setDevice(device);
  };

  // const { data: session } = useSession();
  // console.log('sessiuonfdsfsdfsd', session);
  // const { accessToken } = session;
  // if (session) {

  return (
    <PrivateLayout title={'Inicio'} pageDescription={'Home de scliksuscribe'}>
      <Responsive as={Grid} padded fireOnMount onUpdate={handleOnUpdate}>
        <Grid.Row className="no-padding-y" centered>
          <Grid.Column className="no-padding-x" largeScreen={16} computer={16} tablet={16} mobile={16} textAlign="center">
            <Carousel elements={bannerData} widthElement={BANNERWIDTH} heightElement={BANNERHEIGHT} />
          </Grid.Column>
        </Grid.Row>
        <InformationSection
          idName="conoceTuClick"
          title="conoce tu click"
          text={
            'Nuestra plataforma aprovecha los avances de la tecnología digital. Nuestra plataforma aprovecha los avances de la tecnología digital. Nuestra plataforma aprovecha los avances de la tecnología digital. Nuestra plataforma aprovecha los avances de la tecnología digital'
          }
        />
        <InformationSection
          idName="nuestraOferta"
          title="nuestra oferta"
          text={
            'Las mejores marcas en una misma plataforma para ofrecerte la posibilidad de realizar compras de forma rápida y segura, bajo un modelo de suscripción.Las mejores marcas en una misma plataforma para ofrecerte la'
          }
        />
        <Title idName="marcas" title="marcas" colorText="greenText" />
        <BrandsList device={device} elements={brands} />
        <DualBanner elements={dualBanner} />
      </Responsive>
      {/* <Link href="/login">IR AL LOGIN</Link>
      <Link href="/products">{t('topStories')}</Link>
      <br />
      <br /> */}
      {/* Signed in as {session?.user?.name} <br /> */}
      {/* <div>Access Token: {accessToken}</div> <br /> */}
      {/* <button onClick={() => signOut()}>Sign out</button> */}
    </PrivateLayout>
  );
};

export default Home;
