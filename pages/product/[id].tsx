import React from 'react';
import PublicLayout from '@templates/PublicLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import type { ApiResponseP, Product } from 'types/types';
import axios from 'axios';
import ErrorPage from 'pages/_error';
import { Button, Card } from 'semantic-ui-react';
import Link from 'next/link';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      content: { products },
    },
  }: ApiResponseP = await axios.post(
    'https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/kiosk',
    {
      owner: 1,
    }
  );
  // console.log('products', products);
  console.log('TTTTTTTTTT', typeof products[0].productId);
  const paths = products.map(({ productId }) => ({
    params: { id: productId.toString() },
  }));
  // console.log('PATHS', paths);
  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const {
    data: { content: product },
  }: ApiResponseP = await axios.get(
    `https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/productById/${params?.id}`
  );

  // Pass post data to the page via props
  return { props: { product }, revalidate: 5 };
};

const ProductPage = ({
  product,
  error,
}: {
  product: Product;
  error: number;
}) => {
  if (error) {
    return <ErrorPage statusCode={error} />;
  }
  return (
    <>
      <Head>
        <title>Producto - {product.sku}</title>
      </Head>
      <PublicLayout>
        {product == null ? null : (
          <Card>
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta>{product.maker.text}</Card.Meta>
              <Card.Description>{product.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Link href="/catalog">
                  <a>
                    <Button basic color="red">
                      Regresar
                    </Button>
                  </a>
                </Link>
              </div>
            </Card.Content>
          </Card>
        )}
      </PublicLayout>
    </>
  );
};

export default ProductPage;
