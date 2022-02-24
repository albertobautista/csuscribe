import React from 'react';
import { useTranslation } from 'next-i18next';
import { Grid, Header, Image } from 'semantic-ui-react';
import StackableLink from './StackableLink';
import IconLink from './IconLink';

const paymentMethodsImage = 'https://s3.amazonaws.com/tuclick.stage/GENERAL/logos/logoOpenPayComplete.png';

const SITES = {
  twitter: 'https://twitter.com/ikusi_global',
  linkedin: 'https://www.linkedin.com/company/ikusi/',
  youtube: 'https://www.youtube.com/user/IkusiGroup',
  instagram: 'https://www.instagram.com/ikusi.velatia/',
};

function PrivateFooter() {
  const { t } = useTranslation('private-footer');
  const colorTextFooter = {
    color: '#FFFFFF',
  };

  return (
    <Grid>
      <Grid.Row color="blue" className="no-padding-y">
        <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16} style={{ paddingBottom: '1rem', paddingTop: '1rem' }} />
      </Grid.Row>

      <Grid.Row textAlign="left" color="blue" centered className="no-padding-y">
        <Grid.Column style={{ paddingBottom: '2rem', paddingTop: '2rem' }} largeScreen={4} computer={3} tablet={7} mobile={10} verticalAlign="top">
          <StackableLink label={t('termsAndConditions')} url="https://s3.amazonaws.com/tuclick.stage/IKUSI/documents/AvisoDePrivacidad" targetProp="_self" />
          <StackableLink label={t('privacy')} url="https://s3.amazonaws.com/tuclick.stage/IKUSI/documents/AvisoDePrivacidad" targetProp="_self" />
          <StackableLink label={t('faqs')} url="https://s3.amazonaws.com/tuclick.stage/IKUSI/documents/AvisoDePrivacidad" targetProp="_self" />
          <StackableLink label={t('contactUs')} url="https://s3.amazonaws.com/tuclick.stage/IKUSI/documents/AvisoDePrivacidad" targetProp="_self" />
        </Grid.Column>
        <Grid.Column largeScreen={3} computer={3} tablet={7} mobile={10} verticalAlign="top" style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
          <StackableLink label={t('profeco')} url="https://www.gob.mx/profeco" targetProp="_blank" />
          <StackableLink label={t('condusef')} url="https://www.gob.mx/condusef" targetProp="_blank" />
        </Grid.Column>
        <Grid.Column largeScreen={3} computer={3} tablet={7} mobile={10} verticalAlign="top" style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
          <Header size="small" className="whiteText">
            {t('city')}
          </Header>
          <p style={colorTextFooter}>{t('address')}</p>
          <p style={colorTextFooter}>{t('phone')}</p>
        </Grid.Column>
        <Grid.Column largeScreen={4} computer={4} tablet={7} mobile={11} verticalAlign="top" style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
          <Header className="whiteText" size="small">
            {t('followUs')}
          </Header>
          <Grid style={{ paddingTop: '1rem' }}>
            <Grid.Row style={{ paddingTop: '1rem' }} columns="equal">
              <Grid.Column>
                <IconLink color="blue" iconName="instagram" label="Instagram" url={SITES.instagram} />
              </Grid.Column>
              <Grid.Column>
                <IconLink color="blue" iconName="twitter" label="Twitter" url={SITES.twitter} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ paddingTop: '1rem' }} columns="equal">
              <Grid.Column>
                <IconLink color="blue" iconName="linkedin" label="LinkedIn" url={SITES.linkedin} />
              </Grid.Column>
              <Grid.Column>
                <IconLink color="blue" iconName="youtube" label="YouTube" url={SITES.youtube} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered className="no-padding-y fullBlackBackground">
        <Grid.Column widescreen={5} computer={5} tablet={16} mobile={16} textAlign="center" verticalAlign="top">
          <Image fluid src={paymentMethodsImage} alt="payment method image" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered className="no-padding-y midWhiteBackground">
        <Grid.Column largeScreen={14} computer={14} tablet={16} mobile={16} style={{ paddingBottom: '1rem', paddingTop: '1rem' }} textAlign="center" verticalAlign="top">
          <Header size="tiny" color="grey">
            {t('allRightsReserved')} - {t('poweredBy')}
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PrivateFooter;
