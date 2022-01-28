import React from 'react';
import PublicLayout from '@templates/PublicLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { TAPIAvoResponse, TProduct } from 'index';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({ params: { id } }));

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
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  );
  const product = await response.json();

  // Pass post data to the page via props
  return { props: { product } };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <PublicLayout>
      {product == null ? null : <p>{product.name}</p>}
    </PublicLayout>
  );
};

export default ProductPage;
