import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { TitleProps } from './interfaces';

import styles from './Title.module.css';

const borderHeader = {
  borderBottom: '5px solid',
};
export const Title = ({ title, colorText, idName }: TitleProps) => {
  return (
    <Grid.Row id={idName} centered stretched className={`${styles.general_padding_children} ${styles.general_top_padding}`}>
      <Grid.Column largeScreen={5} computer={6} tablet={6} mobile={6} textAlign="center" style={borderHeader} className={colorText} />
      <Grid.Column largeScreen={6} computer={4} tablet={15} mobile={15} textAlign="center" className={styles.padding_main_header}>
        <Header as="h3" color="black" content={title.toUpperCase()} />
      </Grid.Column>
      <Grid.Column largeScreen={5} computer={6} tablet={6} mobile={6} textAlign="center" style={borderHeader} className={colorText} />
    </Grid.Row>
  );
};
