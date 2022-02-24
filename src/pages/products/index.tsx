import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { Grid, Card, Icon, Pagination, PaginationProps, Responsive, ResponsiveProps, Dropdown } from 'semantic-ui-react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PrivateLayout from '@templates/PrivateLayout';
import ProductCard from '@components/ProductCard';
import { getPaginationArrayAndPages } from '@utils/utils';
import type { ApiResponseProducts, Maker, Product } from '@interfaces/product';
import ErrorPage from '../_error';
// import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';

const PAGESIZE = 12;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const {
      data: {
        content: { products, filterStatics },
      },
    }: ApiResponseProducts = await axios.post('https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/all', {
      owner: 1,
    });
    const productsPagination = getPaginationArrayAndPages(products, PAGESIZE);
    const i18nConf = await serverSideTranslations(locale!);
    return {
      props: {
        productsPagination: productsPagination.formatedArray,
        totalPages: productsPagination.totalPages,
        makers: filterStatics[1].options,
        licenceTypes: filterStatics[0].options,
        ...i18nConf,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.log('🚀 ~ file: index.tsx ~ line 41 ~ constgetStaticProps:GetStaticProps= ~ error', error);
    return {
      props: {
        statusCode: 500,
      },
    };
  }
};
const Catalog = ({
  productsPagination,
  totalPages,
  makers,
  licenceTypes,
  statusCode,
}: {
  products: Product[];
  productsPagination: Array<Product[]>;
  totalPages: number;
  makers: Maker[];
  licenceTypes: any;
  statusCode: number;
}) => {
  const { t } = useTranslation('common');

  // const { data: session } = useSession();
  // const router = useRouter();
  const [activePage, setActivePage] = useState(1);
  const [enterpriseActive] = useState(1);
  const [licenceTypeActive] = useState(2);
  const [width, setWidth] = useState(1);

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

  // const filterForMaker = makerId => {
  //   const { products } = this.state;
  //   let foundData = [];
  //   if (!makerId || makerId === 0 || makerId === undefined) {
  //     foundData = products;
  //   } else {
  //     foundData = products.filter(
  //       filterInfo => filterInfo.maker.id === makerId,
  //     );
  //   }
  // const handleEnterpriseChange = (event, item) => {
  //   // filterForMaker(item.value);
  //   setEnterpriseActive(item.value);
  //   // this.setState({
  //   //   enterpriseActive: item.value,
  //   //   typeActive: 0,
  //   // });
  // };

  // const handleTypeChange = (event, item) => {
  //   // this.filterForMaker(item.value);
  //   setLicenceTypeActive(item.value);
  //   // this.setState({
  //   //   enterpriseActive: item.value,
  //   //   typeActive: 0,
  //   // });
  // };

  if (statusCode) {
    return <ErrorPage statusCode={statusCode} />;
  }

  return (
    <>
      <Head>
        <title>Catálogo de Productos</title>
      </Head>
      <PrivateLayout>
        <Grid padded style={{ paddingTop: '1rem', paddingBottom: '50px' }}>
          <Grid.Row>
            <Grid.Column largeScreen={4} computer={4} tablet={8} mobile={8} floated="right">
              <Dropdown
                options={makers}
                value={enterpriseActive}
                // onChange={handleEnterpriseChange}
                fluid
                selection
                placeholder={t('gettingStarted')}
              />
            </Grid.Column>
            <Grid.Column largeScreen={4} computer={4} tablet={8} mobile={8}>
              <Dropdown
                options={licenceTypes}
                value={licenceTypeActive}
                // onChange={handleTypeChange}
                fluid
                selection
                placeholder="Licencias"
              />
            </Grid.Column>
          </Grid.Row>
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
      </PrivateLayout>
    </>
  );
};

export default Catalog;
