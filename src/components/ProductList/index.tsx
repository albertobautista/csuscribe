import React from 'react';
import ProductCard from '@components/ProductCard';
import { ProductListProps } from './interfaces';

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </>
  );
};

export default ProductList;
