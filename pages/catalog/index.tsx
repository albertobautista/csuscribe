import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import type { ApiResponseP, Product } from '../../types/types';
import PublicLayout from '@templates/PublicLayout';
import { Grid, Icon, Pagination, PaginationProps } from 'semantic-ui-react';
import ProductList from '@components/ProductList';
import { useEffect, useState } from 'react';

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
  const [totalPages, setTotalPages] = useState(1);
  const [activePage, setActivePage] = useState<any>(1);
  const [productosFormateados, setproductosFormateados] = useState<any>([]);
  const getPaginationArrayAndPages = (
    originalArray: Product[] = [],
    pageSize: number
  ) => {
    const formatedArray = [];
    let totalPages = originalArray.length / pageSize;
    let start = 0;
    let end = pageSize;
    totalPages =
      totalPages % 1 > 0 ? Math.trunc(totalPages) + 1 : Math.trunc(totalPages);
    for (let index = 0; index < totalPages; index++) {
      const page = originalArray.slice(start, end);
      start = end;
      end += pageSize;
      formatedArray.push(page);
    }
    return { formatedArray, totalPages: totalPages > 0 ? totalPages : 1 };
  };
  const handlePaginationChange = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: PaginationProps
  ) => {
    console.log('DDDDDDDD', data);
    setActivePage(data.activePage);
  };

  useEffect(() => {
    const productsPagination = getPaginationArrayAndPages(products, 12);
    console.log('productsPagination', productsPagination);
    setproductosFormateados(productsPagination.formatedArray);
    setTotalPages(productsPagination.totalPages);
  }, [products]);

  return (
    <PublicLayout>
      <Grid>
        <Grid.Row columns={4}>
          {productosFormateados.length > 0 && (
            <ProductList products={productosFormateados[activePage - 1]} />
          )}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={16} tablet={16} mobile={16} textAlign="center">
            {totalPages > 1 ? (
              <Pagination
                activePage={activePage}
                onPageChange={handlePaginationChange}
                totalPages={totalPages}
                pointing
                secondary
                ellipsisItem={{
                  content: <Icon name="ellipsis horizontal" />,
                  icon: true,
                }}
              />
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PublicLayout>
  );
};

export default Catalog;
