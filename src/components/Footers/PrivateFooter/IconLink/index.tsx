import React from 'react';
import { Icon, IconProps } from 'semantic-ui-react';

const IconLink = (props: IconProps) => {
  const { label = '', url = '', color = 'green', style = {}, size = 'large', iconName = '', background = 'white' } = props;
  return (
    <a style={style} href={url} className={`${background}Text`} rel="noreferrer" target="_blank">
      <Icon size={size} color={color} circular className={`${background}Background`} name={iconName} />
      <span style={{ paddingRight: '.5em', paddingLeft: '.5em' }}>{label}</span>
    </a>
  );
};

export default IconLink;
