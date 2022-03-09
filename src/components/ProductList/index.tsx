import React, { useEffect, useState, FC } from 'react';
import ProductCard from '@components/ProductCard';
import { ProductListProps } from './interfaces';
import { Card, Grid, Header, Icon, Pagination, PaginationProps, Responsive, ResponsiveProps } from 'semantic-ui-react';
import { Product } from '@interfaces/product';
import { getPaginationArrayAndPages } from './utils';

const ProductList: FC<ProductListProps> = ({ products, pageSize }) => {
  const [width, setWidth] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [formatedProducts, setFormatedProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const handlePaginationChange = async (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => {
    setActivePage(data.activePage as number);
  };

  const handleOnUpdate = (event: React.SyntheticEvent<HTMLElement>, { width: widthChange }: ResponsiveProps) => {
    setWidth(widthChange);
  };

  const calculateItemPerRow = (width: number) => {
    if (width >= 1160 && width <= 1380) return 4;
    if (width >= 320 && width <= 1159) return 2;

    return 4;
  };

  const renderProductList = (formatedProducts: Array<Product[]>, activePage: number) => {
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

  const renderEmptyList = () => {
    // const { noDataMessage } = this.props;
    return (
      <Grid.Column computer={16} tablet={16} mobile={16} textAlign="center">
        <Header>{'noDataMessage'}</Header>
      </Grid.Column>
    );
  };
  const setProductsInformation = () => {
    const productsPagination = getPaginationArrayAndPages(products, pageSize);
    setFormatedProducts(productsPagination.formatedArray);
    setTotalPages(productsPagination.totalPages);
    setActivePage(1);
  };

  useEffect(() => {
    setProductsInformation();
  }, []);

  useEffect(() => {
    setProductsInformation();
  }, [products]);

  return (
    <Grid>
      <Grid.Row>{formatedProducts.length > 0 ? renderProductList(formatedProducts, activePage) : renderEmptyList()}</Grid.Row>
      <Grid.Row>
        <Grid.Column large={16} computer={16} tablet={16} mobile={16} textAlign="center">
          {totalPages > 1 ? (
            // <div style={{ width: '100px' }}>
            <Pagination
              boundaryRange={0}
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
          ) : // </div>
          null}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ProductList;
