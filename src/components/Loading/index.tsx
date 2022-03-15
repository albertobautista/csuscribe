import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = ({ disable }) => (
  <Dimmer active={!disable} inverted>
    <Loader active />
  </Dimmer>
);

export default Loading;
