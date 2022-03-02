import React from 'react';
import PublicLayout from '@templates/PrivateLayout';
import { GetServerSideProps } from 'next';
import type { ApiResponseProducts, Product } from '@interfaces/product';
import axios from 'axios';
import ErrorPage from '../_error';
import { Button, Grid, Header, Label, Segment } from 'semantic-ui-react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProductDescription from '@components/ProductDescription';

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
          <Grid container style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}>
            <Grid.Row>
              <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
                <ProductDescription product={product} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
                <Segment padded="very" textAlign="center">
                  <Label attached="top">
                    <Header as="h3" textAlign="center" className="primary">
                      Descripción
                    </Header>
                  </Label>
                  <p>{product.description}</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Link href="/products">
              <a>
                <Button basic color="red">
                  Regresar
                </Button>
              </a>
            </Link>
          </Grid>
          // <Card>
          //   <Card.Content>
          //     <Card.Header>{product.name}</Card.Header>
          //     <Card.Meta>{product.maker.text}</Card.Meta>
          //     <Card.Description>{product.description}</Card.Description>
          //   </Card.Content>
          //   <Card.Content extra>
          //     <div className="ui two buttons">
          //       <Link href="/products">
          //         <a>
          //           <Button basic color="red">
          //             Regresar
          //           </Button>
          //         </a>
          //       </Link>
          //     </div>
          //   </Card.Content>
          // </Card>
        )}
      </PublicLayout>
    </>
  );
};

export default ProductPage;
