import SearchProducts from '@components/SearchProducts';
import React, { useState } from 'react';
import { Grid, Icon, Label, Responsive, ResponsiveProps } from 'semantic-ui-react';

import Image from 'next/image';

const PublicHeader = () => {
  const [device, setDevice] = useState('computer');

  const getSize = (width: number, modifier = '') => {
    let mobileLimit = 768;
    let tabletLimit = 992;
    switch (modifier) {
      case 'extended':
        mobileLimit = 768 - 150;
        tabletLimit = 992 + 300;
        break;
      default:
        mobileLimit = 768;
        tabletLimit = 992;
        break;
    }
    if (width < mobileLimit) return 'mobile';
    if (width < tabletLimit) return 'tablet';
    return 'computer';
  };
  const handleOnUpdate = (e: React.SyntheticEvent<HTMLElement>, { width }: ResponsiveProps) => {
    const device = getSize(width);
    setDevice(device);
  };

  const computerHeader = () => (
    <Grid>
      <Grid.Row textAlign="center" verticalAlign="middle">
        <Grid.Column mobile={15} tablet={3} computer={3} largeScreen={3} widescreen={3}>
          <Grid padded verticalAlign="middle" centered>
            <Grid.Row centered>
              <Grid.Column mobile={16} tablet={16} computer={16} largeScreen={16} widescreen={16}>
                <Image src="/logos/siclikSuscribe.webp" alt="logo" width={300} height={150} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={15} tablet={12} computer={10} largeScreen={11} widescreen={11}>
          <SearchProducts device={device} />
        </Grid.Column>
        <Grid.Column mobile={12} tablet={2} computer={2} largeScreen={1} widescreen={1}>
          <Grid>
            <Grid.Row centered>
              <Grid.Column mobile={8} tablet={8} computer={8} largeScreen={10} widescreen={10} floated="right" textAlign="right">
                <div>
                  <Icon name="shop" size="big" link />
                  {/* {props.cartCount > 0 ? ( */}
                  <Label floating circular color="green">
                    {/* {props.cartCount} */}
                    14
                  </Label>
                  {/* // ) : null} */}
                </div>
                {/* )} */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={3} tablet={2} computer={1} largeScreen={1} widescreen={1}>
          {/* <PopMenu
            history={props.history}
            elements={menu}
            isAuthenticated={props.isAuthenticated}
          /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  const responsiveHeader = () => (
    <Grid>
      <Grid.Row textAlign="center" verticalAlign="middle" className="no-padding-bottom">
        <Grid.Column mobile={8} tablet={11}>
          <Grid padded verticalAlign="middle" centered>
            <Grid.Row centered>
              <Grid.Column mobile={16} tablet={16}>
                <Image src="/logos/siclikSuscribe.webp" alt="logo" width={300} height={150} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={5} floated="right">
          <Grid padded verticalAlign="middle">
            <Grid.Row>
              <Grid.Column mobile={6} tablet={5} floated="right" textAlign="right">
                <div>
                  <Icon
                    name="shop"
                    size="big"
                    link
                    // onClick={() => goShoppingCart(props)}
                  />
                  {/* {props.cartCount > 0 ? ( */}
                  <Label floating circular color="green">
                    {/* {props.cartCount} */}
                    24
                  </Label>
                  {/* ) : null} */}
                </div>
                {/* )} */}
              </Grid.Column>
              <Grid.Column mobile={6} tablet={6}>
                {/* <PopMenu
                  history={props.history}
                  elements={menu}
                  isAuthenticated={props.isAuthenticated}
                /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="no-padding-y" textAlign="center" verticalAlign="middle">
        <Grid.Column className="no-padding-x" mobile={16} tablet={16}>
          <SearchProducts device={device} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  return (
    <header>
      <Responsive as={Grid} padded style={{ backgroundColor: '#ffffff' }} fireOnMount onUpdate={handleOnUpdate}>
        <Grid.Row textAlign="center" verticalAlign="middle">
          <Grid.Column mobile={16} tablet={16} computer={16} largeScreen={16} widescreen={16}>
            {device === 'computer' ? computerHeader() : responsiveHeader()}
          </Grid.Column>
        </Grid.Row>
      </Responsive>
    </header>
  );
};

export default PublicHeader;
