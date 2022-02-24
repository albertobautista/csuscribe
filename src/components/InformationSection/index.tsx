import React from 'react';
import { Grid } from 'semantic-ui-react';
import { InformationSectionProps } from './interfaces';
import { Title } from '@components/Title';

import styles from './Info.module.css';

const InformationSection = ({ idName, title, text }: InformationSectionProps) => {
  return (
    <>
      <Title idName={idName} title={title} colorText="blueText" />
      <Grid.Row className="no-padding-y" centered>
        <Grid.Column largeScreen={8} computer={6} tablet={15} mobile={15} textAlign="center">
          <p className={`${styles.padding_btw_text} ${styles.no_margin_bottom}`} style={{ fontSize: '15px' }}>
            {text}
          </p>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

export default InformationSection;
