import React from 'react';
import { Grid } from 'semantic-ui-react';
import PrivateHeader from '@components/Headers/PrivateHeader';
import PrivateFooter from '@components/Footers/PrivateFooter';

const PrivateLayout: React.FC = ({ children }) => {
  return (
    <Grid>
      <Grid.Row stretched className="no-padding-y">
        <Grid.Column>
          <PrivateHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="no-padding-y">
        <Grid.Column style={{ minHeight: '70vh' }}>{children}</Grid.Column>
      </Grid.Row>
      <Grid.Row stretched>
        <Grid.Column>
          <PrivateFooter />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PrivateLayout;
