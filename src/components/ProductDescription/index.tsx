import DescriptionComponent from '@components/DescriptionComponent';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
const urlAWS = 'https://s3.amazonaws.com/tuclick.stage/IKUSI/';
const ProductDescription = ({ product }: any) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column largeScreen={8} computer={8} tablet={16} mobile={16} verticalAlign="middle">
          <Image centered src={`${urlAWS}${product.image}`} />
        </Grid.Column>
        <Grid.Column largeScreen={8} computer={8} tablet={16} mobile={16}>
          <DescriptionComponent product={product} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ProductDescription;
