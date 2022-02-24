import React from 'react';
import Link from 'next/link';
import { Header } from 'semantic-ui-react';
import { LinkedMenuItemProps } from './interfaces';

const LinkedMenuItem = ({ label, linkTo, padding }: LinkedMenuItemProps) => (
  <Link passHref href={linkTo}>
    <Header
      style={{
        textDecoration: 'none',
        paddingLeft: padding,
        paddingRight: padding,
        cursor: 'pointer',
        fontSize: '15px',
      }}
      textAlign="center"
      as="span"
      inverted
    >
      {label}
    </Header>
  </Link>
);

// const LinkedMenuItem = ({ label, linkTo, padding }: LinkedMenuItemProps) => (
//   <Link passHref href={linkTo}>
//     <a className={styles.link_format} style={{ paddingLeft: padding, paddingRight: padding }}>
//       {label}
//     </a>
//   </Link>
// );

export default LinkedMenuItem;
