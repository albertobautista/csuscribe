import { SemanticCOLORS } from 'semantic-ui-react';

export interface StackableLinkProps {
  label: string;
  url: string;
  color?: SemanticCOLORS | 'white';
  style?: {};
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
  hideDivider?: boolean;
  targetProp: string;
}
