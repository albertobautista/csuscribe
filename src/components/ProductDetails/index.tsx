import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Dropdown, DropdownProps, Grid, Header, Placeholder } from 'semantic-ui-react';

import { ActiveProductContext } from '@context/ActiveProduct/ActiveProductContext';
import { currencyFormat } from '@utilities/utils';
import { Client, ClientResponseProps, ProductDetailsProps } from './interfaces';

import styles from './DetailsProduct.module.css';
import AutodeskDetail from '@components/AutodeskDetail';
import { getClientsInfo } from './services';
import { AxiosResponse } from 'axios';

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const { t } = useTranslation('product-details');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ isError: false, message: '' });
  const [clients, setClients] = useState<Client[]>([]);

  const { setActiveProductToCart, activeProductToCart } = useContext(ActiveProductContext);

  const [currentScheme, setCurrentScheme] = useState('');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const getClients = () => {
    setLoading(true);
    getClientsInfo()
      .then((response: AxiosResponse<ClientResponseProps>) => {
        const { statusCode } = response.data;

        if (statusCode === 200) {
          const { data } = response.data;
          setClients(data);
        } else {
          setError({ isError: true, message: `Error: ${statusCode}` });
        }
      })
      .catch((error) => {
        setError({ isError: true, message: `Error: ${error}` });
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  };

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

  const handleClientChange = (event, item: DropdownProps) => {
    setActiveProductToCart({ ...activeProductToCart, clientId: Number(item.value) });
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

  useEffect(() => {
    setActiveProductToCart({
      ...activeProductToCart,
      makerId: product.maker.id,
      owner: 1,
      productId: product.productId,
      quantity: 1,
      renovationSchemeId: product.renovationScheme[0].id,
      clientId: 0,
    });
  }, []);

  useEffect(() => {
    return () => {
      setActiveProductToCart({
        ...activeProductToCart,
        makerId: 0,
        owner: 0,
        productId: 0,
        quantity: 1,
        renovationSchemeId: 0,
        clientId: 0,
      });
    };
  }, []);

  useEffect(() => {
    getClients();
  }, []);

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

      {!loading ? (
        !error.isError ? (
          <Grid.Row className="no-padding-y">
            <Grid.Column largeScreen={11} computer={11} tablet={16} mobile={16} className="no-padding-y">
              <Header as="h4" className="no-margin-y">
                {t('client')}:&nbsp;
              </Header>
              <Dropdown options={clients} onChange={handleClientChange} fluid selection placeholder={t('selectClient')} />
            </Grid.Column>
          </Grid.Row>
        ) : (
          <Grid.Column largeScreen={11} computer={11} tablet={16} mobile={16} className="no-padding-y">
            <Header as="h4" className="no-margin-y">
              {error.message}
            </Header>
          </Grid.Column>
        )
      ) : (
        <Grid.Row>
          <Grid.Column largeScreen={11} computer={11} tablet={16} mobile={16}>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>
      )}

      {product.maker.id === 11 && (
        <Grid.Row>
          <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
            <AutodeskDetail />
          </Grid.Column>
        </Grid.Row>
      )}

      {product.renovationScheme.length > 1 ? (
        <>
          <Grid.Row>
            <Grid.Column largeScreen={11} computer={11} tablet={8} mobile={16} className="no-padding-y">
              <Header as="h4">{t('renovationScheme')}:&nbsp;</Header>
              <Dropdown options={product.renovationScheme} value={activeProductToCart.renovationSchemeId} onChange={handleRenovationSchemeChange} fluid selection placeholder={t('renovationScheme')} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4">
                {t('renovationScheme')}:&nbsp;
                {currentScheme}
              </Header>
            </Grid.Column>
          </Grid.Row>
        </>
      ) : (
        <Grid.Row>
          <Grid.Column>
            <Header as="h4">
              {t('renovationScheme')} :&nbsp;
              {currentScheme}
            </Header>
          </Grid.Column>
        </Grid.Row>
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
            {`${currencyFormat(currentPrice, 'USD')}`}
          </Header>
        </Grid.Column>
        <Grid.Column largeScreen={8} computer={8} tablet={16} mobile={16}>
          <Header as="h4" className={styles.header_title_price}>
            {t('subtotal')} :
          </Header>
          &nbsp;
          <Header as="h4" className={styles.header_price}>
            {`${currencyFormat(subtotal, 'USD')}`}
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ProductDetails;
