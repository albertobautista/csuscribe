import { GetStaticProps } from 'next';
import axios from 'axios';
import type { ApiResponseP, Product } from '../../types/types';
import PublicLayout from '@templates/PublicLayout';
import Link from 'next/link';
import { Button, Card, Grid } from 'semantic-ui-react';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      data: {
        content: { products },
      },
    }: ApiResponseP = await axios.post(
      'https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/all',
      {
        owner: 1,
      }
    );
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        statusCode: 500,
      },
    };
  }
};
const Catalog = ({ products }: { products: Product[] }) => {
  return (
    <PublicLayout>
      <Grid>
        <Grid.Row columns={4}>
          {products.map((product) => (
            <Grid.Column key={product.productId}>
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
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </PublicLayout>
  );
};

export default Catalog;
