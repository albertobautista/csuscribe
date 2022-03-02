import DetailsProduct from '@components/DetailsProduct';
import React from 'react';
import { Button, Grid, Header, Icon, Input } from 'semantic-ui-react';

const DescriptionComponent = ({ product }: any) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
          <Header as="h3" className="primary">
            {product.name}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
          <DetailsProduct
            product={product}
            // {...this.props}
            // quantity={quantity}
            // handleRenovationScheme={this.handleRenovationScheme}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="left" columns={2} className="container_buttons_addtocart_addtofavorites">
        <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
          <Grid>
            <Grid.Row className="no-padding-bottom">
              <Grid.Column width={16}>
                <Input type="number" value={1} action>
                  <input
                    style={{
                      width: '4em',
                      paddingRight: '0.1em',
                      paddingLeft: '1em',
                    }}
                  />

                  <Button fluid icon labelPosition="right" message="dsd">
                    <Icon name="shop" />
                    {/* {t('descriptionComponent.addToCart')} */}
                    Añadir al carrito
                  </Button>
                </Input>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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

export default DescriptionComponent;
