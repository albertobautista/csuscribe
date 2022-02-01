import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import type { Product } from 'types/types';

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.productId}`}>
      <a>
        <Card>
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Meta>{product.maker.text}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Link href={`/product/${product.productId}`}>
                <a>
                  <Button basic color="red">
                    Ver Detalle
                  </Button>
                </a>
              </Link>
            </div>
          </Card.Content>
        </Card>
      </a>
    </Link>
  );
};

export default ProductCard;
