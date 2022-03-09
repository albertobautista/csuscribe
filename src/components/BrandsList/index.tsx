import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Grid, Header } from 'semantic-ui-react';
import { BrandProps, BrandsListProps } from './interfaces';
import { responsiveStyle } from './utils';

import styles from './BrandsList.module.css';

const BrandsList: FC<BrandsListProps> = ({ device, elements }: BrandsListProps) => {
  const { rowWidths, columnWidths }: any = responsiveStyle[device];

  return (
    <Grid.Row centered className={`${styles.padding_btw_text} ${styles.general_padding_children}`} columns={rowWidths.columns}>
      {elements.map((serviceResource: BrandProps) => {
        const { imageWeb, text, redirect } = serviceResource;
        return (
          <Grid.Column key={text} className="" textAlign="center" tablet={columnWidths.tablet} mobile={columnWidths.mobile}>
            <Link href={`/productos/${redirect}`} passHref>
              <>
                <Image alt={imageWeb} src={imageWeb} width="500" height="500" />
                <Header size="small" className={styles.header_elements} content={text} />
              </>
            </Link>
          </Grid.Column>
        );
      })}
    </Grid.Row>
  );
};

export default BrandsList;
