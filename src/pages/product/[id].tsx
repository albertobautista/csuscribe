import React, { useContext, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import axios from 'axios';
import { Button, Grid } from 'semantic-ui-react';

import { ActiveProductContext } from '@context/ActiveProduct';
import PublicLayout from '@templates/PrivateLayout';
import ProductInformation from '@components/ProductInformation';
import type { ApiResponseProducts, Product } from '@interfaces/product';

import ErrorPage from '../_error';
// import { useRouter } from 'next/router';
// import ProductDescription from '@components/ProductDescription';
// import { useContacts } from '@hooks/useContacts';

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      content: { products },
    },
  }: ApiResponseProducts = await axios.post('https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/all', {
    owner: 1,
  });
  // console.log('products', products);
  const paths = products.map(({ productId }) => ({
    params: { id: productId.toString() },
  }));
  // console.log('PATHS', paths);
  return {
    // Statically generate all paths
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const {
    data: { content: product },
  }: ApiResponseProducts = await axios.get(`https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/productById/${params?.id}`);

  const i18nConf = await serverSideTranslations(locale!);

  if (Object.keys(product).length == 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  // Pass post data to the page via props
  return { props: { product, ...i18nConf } };
};

const ProductPage = ({ product, error }: { product: Product; error: number }) => {
  // const router = useRouter();
  // const { contacts, isLoading } = useContacts('/contacts');
  const { setActiveProductToCart } = useContext(ActiveProductContext);

  useEffect(() => {
    // setActiveProduct(product);
    setActiveProductToCart({
      makerId: product.maker.id,
      owner: 1,
      productId: product.productId,
      quantity: 1,
      renovationSchemeId: product.renovationScheme[0].id,
    });
  }, []);

  if (error) {
    return <ErrorPage statusCode={error} />;
  }

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  return (
    <PublicLayout title={`Producto - ${product.name}`} pageDescription={''}>
      <Grid container style={{ paddingBottom: '2.5rem' }}>
        <Grid.Row>
          <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
            <ProductInformation product={product} />
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
    </PublicLayout>
  );
};

export default ProductPage;
