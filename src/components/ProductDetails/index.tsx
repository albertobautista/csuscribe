import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Dropdown, DropdownProps, Grid, Header } from 'semantic-ui-react';

import { ActiveProductContext } from '@context/ActiveProduct/ActiveProductContext';
import { currencyFormat } from '@utils/utils';
import { ProductDetailsProps } from './interfaces';

import styles from './DetailsProduct.module.css';

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const { t } = useTranslation('product-details');

  const { setActiveProductToCart, activeProductToCart } = useContext(ActiveProductContext);

  const [currentScheme, setCurrentScheme] = useState('');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const getPrice = (item) => {
    if (item) {
      const resultPrice = product.price.find((price) => price.id === item.value);
      if (resultPrice) setCurrentPrice(resultPrice.value);
    }
  };

  const getRenovationScheme = (item) => {
    if (item) {
      const resultRenovation = product.renovationScheme.find((renovationScheme) => renovationScheme.id === item.value);
      if (resultRenovation) setCurrentScheme(resultRenovation.text);
    }
  };

  const handleRenovationSchemeChange = (event, item: DropdownProps) => {
    getPrice(item);
    getRenovationScheme(item);
    setActiveProductToCart({ ...activeProductToCart, renovationSchemeId: Number(item.value) });
  };

  useEffect(() => {
    if (product) {
      setCurrentScheme(product.renovationScheme[0].text);
      console.log('🚀 ~ file: index.tsx ~ line 47 ~ useEffect ~ product.renovationScheme[0].text', product.renovationScheme[0].text);
      setCurrentPrice(product.price[0].value);
    }
  }, []);

  useEffect(() => {
    setSubtotal(currentPrice * activeProductToCart.quantity);
  }, [activeProductToCart.quantity, currentPrice]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
          <Header as="h3" className="greenText">
            {product.name}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h4">
            {t('SKU')}:&nbsp;
            {product.sku}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h4">
            {t('productType')}:&nbsp;
            {product.productType.text}
          </Header>
        </Grid.Column>
      </Grid.Row>
      {/* 
      TODO:
      <Grid.Row>
        <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
          {activeProduct.maker.id === 1 && (
            <MicrosoftDetail

            // handleCurrentPrice={this.handleCurrentPrice}
            // handleRenovationScheme={this.handleRenovationScheme}
            />
          )}
        </Grid.Column>
      </Grid.Row> */}
      {product.renovationScheme.length > 1 ? (
        <>
          <Grid.Row>
            <Grid.Column largeScreen={8} computer={8} tablet={8} mobile={16} className="no-padding-y">
              <Dropdown options={product.renovationScheme} value={activeProductToCart.renovationSchemeId} onChange={handleRenovationSchemeChange} fluid selection placeholder={t('renovationScheme')} />
            </Grid.Column>
          </Grid.Row>
          {product.renovationScheme && activeProductToCart.renovationSchemeId ? (
            <Grid.Row>
              <Grid.Column>
                <Header as="h4">
                  {t('renovationScheme')}:&nbsp;
                  {currentScheme}
                </Header>
              </Grid.Column>
            </Grid.Row>
          ) : null}
        </>
      ) : (
        <Header as="h4">
          {t('renovationScheme')} :&nbsp;
          {currentScheme}
        </Header>
      )}
      <Grid.Row>
        <Grid.Column>
          <Header as="h4">
            {t('lastUpdateProduct')}
            :&nbsp;
            {product.lastUpdateProduct}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column largeScreen={8} computer={8} tablet={16} mobile={16}>
          <Header as="h4" className={styles.header_title_price}>
            {t('price')} :
          </Header>
          &nbsp;
          <Header as="h4" className={styles.header_price}>
            {`${currencyFormat(currentPrice, 'MXN')}`}
          </Header>
        </Grid.Column>
        <Grid.Column largeScreen={8} computer={8} tablet={16} mobile={16}>
          <Header as="h4" className={styles.header_title_price}>
            {t('subtotal')} :
          </Header>
          &nbsp;
          <Header as="h4" className={styles.header_price}>
            {`${currencyFormat(subtotal, 'MXN')}`}
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ProductDetails;
