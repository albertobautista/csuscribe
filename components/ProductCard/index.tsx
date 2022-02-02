import Link from 'next/link';
import React from 'react';
import { Card, Grid, Header, Responsive } from 'semantic-ui-react';
import type { Product } from '@interfaces/product';

import styles from '@styles/ProductCard.module.css';
import Image from 'next/image';

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const { name, sku, productId } = product;

  const extra = () => {
    return (
      <Responsive as={Grid} fireOnMount>
        <Grid.Row centered className={styles['card-border']}>
          <Grid.Column mobile={16} tablet={16} computer={16} largeScreen={16} widescreen={16} style={{ cursor: 'pointer' }} textAlign="center">
            {/* <Image
              as="img"
              className={styles['card-image']}
              // style={{ cursor: 'pointer' }}
              // onClick={() => this.handleProductClick(productId)}
              src={`${urlAWS}${image}`}
              size="mini"
              alt={name}
            /> */}
            <Image src="/logos/box_azure.webp" alt={name} width={150} height={180} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={15} largeScreen={15} widescreen={15}>
            <Header
              style={{ cursor: 'pointer', marginBottom: 0 }}
              // onClick={() => this.handleProductClick(productId)}
              as="h5"
              className="primary"
              textAlign="center"
            >
              {name}
            </Header>
            <Header textAlign="center" as="h5" style={{ marginTop: 0 }}>
              ({sku})
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
    );
  };

  return (
    <Link href={`/product/${productId}`} passHref>
      <Card fluid content={extra()} className={styles['simple-card']} />
    </Link>
  );
  // return (
  //   <Link href={`/product/${product.productId}`}>
  //     <a>
  //       <Card>
  //         <Card.Content>
  //           <Card.Header>{product.name}</Card.Header>
  //           <Card.Meta>{product.maker.text}</Card.Meta>
  //         </Card.Content>
  //         <Card.Content extra>
  //           <div className="ui two buttons">
  //             <Link href={`/product/${product.productId}`}>
  //               <a>
  //                 <Button basic color="red">
  //                   Ver Detalle
  //                 </Button>
  //               </a>
  //             </Link>
  //           </div>
  //         </Card.Content>
  //       </Card>
  //     </a>
  //   </Link>
  // );
};

export default ProductCard;
