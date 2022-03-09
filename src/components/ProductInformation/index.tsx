import React, { useContext, FC } from 'react';
import { useTranslation } from 'next-i18next';
import { Button, Grid, Header, Icon, Image, Input, Label, Segment } from 'semantic-ui-react';

import { ActiveProductContext } from '@context/ActiveProduct';
import ProductDetails from '@components/ProductDetails';
import { ProductInformationProps } from './interfaces';

const urlAWS = 'https://s3.amazonaws.com/tuclick.stage/IKUSI/';

const ProductInformation: FC<ProductInformationProps> = ({ product }) => {
  const { t } = useTranslation('product-information');

  const { activeProductToCart, setActiveProductToCart } = useContext(ActiveProductContext);

  const handleQuantity = (e, { value }) => {
    let validValue = 1;
    if (value !== '') {
      const roundedQuantity = Math.round(value);
      validValue = validateQuantity(roundedQuantity);
    }
    setActiveProductToCart({ ...activeProductToCart, quantity: validValue });
  };

  const validateQuantity = (value: number) => {
    const maxQuantity = product.maxQuantity || 100;
    if (value > maxQuantity) return maxQuantity;
    if (value > 0) return value;
    if (value === 0 || value < 0) return 1;
    return value;
  };

  const handleQuantityBlur = () => {
    const roundedQuantity = Math.round(activeProductToCart.quantity);
    const validQuantity = validateQuantity(roundedQuantity);
    setActiveProductToCart({ ...activeProductToCart, quantity: validQuantity });
  };

  const addItems = async () => {
    const body = activeProductToCart;
    console.log('🚀 ~ file: index.tsx ~ line 45 ~ addItems ~ body', body);
  };
  return (
    <Grid container>
      <Grid.Row>
        <Grid.Column largeScreen={8} computer={8} tablet={8} mobile={16} verticalAlign="middle">
          <Image centered src={`${urlAWS}${product.image}`} alt={product.name} />
        </Grid.Column>
        <Grid.Column largeScreen={8} computer={8} tablet={8} mobile={16} verticalAlign="middle">
          <Grid padded>
            <Grid.Row>
              <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
                <ProductDetails product={product} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="left" columns={2}>
              <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
                <Grid>
                  <Grid.Row className="no-padding-bottom">
                    <Grid.Column width={16}>
                      <Input type="number" value={activeProductToCart.quantity} onChange={handleQuantity} onBlur={handleQuantityBlur} action>
                        <input
                          style={{
                            width: '4em',
                            paddingRight: '0.1em',
                            paddingLeft: '1em',
                          }}
                        />

                        <Button
                          fluid
                          onClick={() => addItems()}
                          // loading={adding}
                          // disabled={disableButton}
                          icon
                          labelPosition="right"
                        >
                          <Icon name="shop" />
                          {t('addToCart')}
                        </Button>
                      </Input>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
          <Segment padded="very" textAlign="center">
            <Label attached="top">
              <Header as="h3" textAlign="center" className="greenText">
                {t('description')}
              </Header>
            </Label>
            <p>{product.description}</p>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      {/* {showFormStatus && (
        <Grid.Row>
          <Grid.Column computer={16} tablet={16} mobile={16} textAlign="center">
            <Forms maker={maker} />
          </Grid.Column>
        </Grid.Row>
      )} */}
    </Grid>
  );
};

export default ProductInformation;
