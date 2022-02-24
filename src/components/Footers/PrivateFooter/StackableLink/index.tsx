import React from 'react';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { StackableLinkProps } from './interfaces';

const StackableLink = ({ label = '', url = '', color = 'white', style = {}, size = 'small', hideDivider = false }: StackableLinkProps) => {
  return (
    <Grid.Row style={{ paddingTop: '.2em' }}>
      <Header size={size}>
        <a style={style} href={url} className={`${color}Text`} target="_blank" rel="noreferrer">
          {label}
        </a>
        {hideDivider || <Divider style={{ margin: '0.3em 0' }} />}
      </Header>
    </Grid.Row>
  );
};

export default StackableLink;
