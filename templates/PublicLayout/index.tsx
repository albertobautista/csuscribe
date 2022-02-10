import React from 'react';
import PublicHeader from '@components/Headers/PublicHeader';
import { Grid } from 'semantic-ui-react';

type LayoutProps = { title?: string };

const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid>
      <Grid.Row stretched className="no-padding-y">
        <Grid.Column>
          <PublicHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="no-padding-y">
        <Grid.Column style={{ minHeight: '70vh' }}>{children}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PublicLayout;
