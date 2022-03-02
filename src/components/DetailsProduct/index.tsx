import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const DetailsProduct = ({ product }: any) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header as="h4">
            {/* {t('productDetails.SKU')} */}
            SKU :&nbsp;
            {!product.sku ? '' : product.sku}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h4">
            {/* {t('productDetails.productType')} */}
            Tipo de licencia :&nbsp;
            {!product.productType.text ? '' : product.productType.text}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as="h4">
            {/* {t('productDetails.lastUpdateProduct')} */}
            Última fecha de actualización :&nbsp;
            {!product.lastUpdateProduct ? '' : product.lastUpdateProduct}
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default DetailsProduct;
