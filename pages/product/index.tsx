import PublicLayout from '@templates/PublicLayout';
import { TAPIAvoResponse, TProduct } from 'index';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};
const Catalog = ({ productList }: { productList: TProduct[] }) => {
  console.log('LISTAAA', productList);
  return (
    <PublicLayout>
      {productList.map((product) => (
        <p key={product.id}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </p>
      ))}
    </PublicLayout>
  );
};

export default Catalog;
