import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Grid, Card, Icon, Pagination, PaginationProps, Responsive, ResponsiveProps } from 'semantic-ui-react';

import PublicLayout from '@templates/PublicLayout';
import { getPaginationArrayAndPages } from '@utils/utils';
import type { ApiResponseP, Product } from '@interfaces/product';
import ProductCard from '@components/ProductCard';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      data: {
        content: { products },
      },
    }: ApiResponseP = await axios.post('https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/all', {
      owner: 1,
    });
    const productsPagination = getPaginationArrayAndPages(products, 12);

    return {
      props: {
        productsPagination: productsPagination.formatedArray,
        totalPages: productsPagination.totalPages,
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
const Catalog = ({ productsPagination, totalPages }: { products: Product[]; productsPagination: Array<Product[]>; totalPages: number }) => {
  console.log('formatedProducts1.', productsPagination[0]);

  const [activePage, setActivePage] = useState(1);
  const [width, setWidth] = useState(1);

  const handlePaginationChange = async (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => {
    setActivePage(data.activePage as number);
  };
  const handleOnUpdate = (event: React.SyntheticEvent<HTMLElement>, { width: widthChange }: ResponsiveProps) => {
    console.log('WII', widthChange);
    setWidth(widthChange);
  };
  const calculateItemPerRow = (width: number) => {
    if (width >= 1160 && width <= 1380) return 4;
    // if (width >= Responsive.onlyMobile?.minWidth && width <= 1159) return 2;
    if (width >= 1380 && width <= 1159) return 2;

    return 4;
  };

  const renderProductList = (formatedProducts: Array<Product[]>, activePage: number) => {
    // const { width } = this.state;
    console.log('formatedProducts2', formatedProducts);
    console.log('WII 2', width);

    return (
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Responsive fireOnMount onUpdate={handleOnUpdate} as={Card.Group} stackable itemsPerRow={calculateItemPerRow(width)}>
          {formatedProducts[activePage - 1].map((item) => (
            <ProductCard key={item.productId} product={item} />
          ))}
        </Responsive>
      </Grid.Column>
    );
  };

  return (
    <PublicLayout>
      <Grid>
        <Grid.Row>{productsPagination.length > 0 && renderProductList(productsPagination, activePage)}</Grid.Row>
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
