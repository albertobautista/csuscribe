import ProductCard from '@components/ProductCard';
import React from 'react';
import type { Product } from '@interfaces/product';
interface Props {
  products: Product[];
}
const ProductList = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </>
  );
};

export default ProductList;
