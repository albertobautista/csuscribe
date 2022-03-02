import React from 'react';
import PublicLayout from '@templates/PrivateLayout';
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';
import type { ApiResponseProducts, Product } from '@interfaces/product';
import axios from 'axios';
import ErrorPage from '../_error';
import { Button, Card } from 'semantic-ui-react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// export const getStaticPaths: GetStaticPaths = async () => {
//   const {
//     data: {
//       content: { products },
//     },
//   }: ApiResponseProducts = await axios.post('https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/all', {
//     owner: 1,
//   });
//   // console.log('products', products);
//   const paths = products.map(({ productId }) => ({
//     params: { id: productId.toString() },
//   }));
//   // console.log('PATHS', paths);
//   return {
//     // Statically generate all paths
//     paths,
//     fallback: true,
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const {
    data: { content: product },
  }: ApiResponseProducts = await axios.get(`https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/productById/${params?.id}`);

  const i18nConf = await serverSideTranslations(locale!);

  // Pass post data to the page via props
  return { props: { product, ...i18nConf } };
};

const ProductPage = ({ product, error }: { product: Product; error: number }) => {
  const router = useRouter();
  if (error) {
    return <ErrorPage statusCode={error} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
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
                <Link href="/products">
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
