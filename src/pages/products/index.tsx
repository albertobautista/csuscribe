import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { Grid, Dropdown, DropdownProps } from 'semantic-ui-react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PrivateLayout from '@templates/PrivateLayout';
import { createFormatedFilterArray, formatStaticFilters } from '@utils/utils';
import type { ApiResponseProducts, Product } from '@interfaces/product';
import ErrorPage from '../_error';
// import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import ProductList from '@components/ProductList';
// import { useRouter } from 'next/router';

// const PAGESIZE = 12;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const {
      data: {
        content: { products, filterStatics },
        statusCode,
      },
    }: ApiResponseProducts = await axios.post('https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/products/all', {
      owner: 1,
    });
    const i18nConf = await serverSideTranslations(locale!);
    console.log('GETTT PRODUUUCTS statusCode', statusCode);
    if (statusCode === 200) {
      return {
        props: {
          products,
          filterStatics,
          ...i18nConf,
        },
        revalidate: 5,
      };
    } else {
      return {
        props: {
          products: [],
          filterStatics: [],
          statusCode,
          ...i18nConf,
        },
        revalidate: 5,
      };
    }
  } catch (error) {
    console.log('GETTT PRODUUUCTS ERROR', error);
    return {
      props: {
        statusCode: 500,
      },
    };
  }
};
interface Enterprise {
  id: number;
  text: string;
  value: string;
}

interface LicenceType {
  id: number;
  text: string;
  value: string;
}

const Catalog = ({ products, statusCode, filterStatics }: { products: Product[]; statusCode: number; filterStatics: any }) => {
  const { t } = useTranslation('common');
  // const { data: session } = useSession();
  // const router = useRouter();
  // const [activePage, setActivePage] = useState(1);
  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);
  const [enterpriseActive, setEnterpriseActive] = useState(0);

  const [licenceTypes, setLicenceTypes] = useState<LicenceType[]>([]);
  const [typeActive, setTypeActive] = useState(0);

  const [productsfiltered, setProductsfiltered] = useState<Product[]>(products);
  const [productsfilteredAux, setProductsfilteredAux] = useState<Product[]>(products);

  const setInitialInfo = () => {
    const firstLevelFilters = formatStaticFilters(filterStatics);
    const formatedFilters = createFormatedFilterArray(firstLevelFilters);

    setEnterprises(formatedFilters[0].options);
    filterForMaker(0);
  };
  useEffect(() => {
    if (!statusCode) {
      setInitialInfo();
    }
  }, []);

  const listFilters = (productList: Product[]) => {
    const hashTableFirstLevel = {
      productTypes: {
        title: 'Tipo de producto',
        field: 'productType',
        options: {},
      },
    };
    productList.forEach((product: Product) => {
      hashTableFirstLevel.productTypes.options[product.productType.value] = product.productType;
      return null;
    });

    const staticFilters = Object.values(hashTableFirstLevel).map((filter) => {
      const formatedArray = {
        title: filter.title,
        field: filter.field,
        options: Object.values(filter.options),
      };
      return formatedArray;
    });
    return { products: productList, filterStatics: staticFilters };
  };

  const filterForMaker = (makerId: number) => {
    let foundData: Product[] = [];
    if (!makerId || makerId === 0 || makerId === undefined) {
      foundData = products;
    } else {
      foundData = products.filter((filterInfo) => filterInfo.maker.id === makerId);
    }

    const filtersArray = listFilters(foundData);
    const { filterStatics } = filtersArray;
    const formatedFilterArray = createFormatedFilterArray(filterStatics);

    const licenceTypesByProducts = formatedFilterArray[0].options;

    setProductsfiltered(foundData);
    setProductsfilteredAux(foundData);
    setLicenceTypes(licenceTypesByProducts);
  };

  const handleEnterpriseChange = (event: React.SyntheticEvent<HTMLElement>, item: DropdownProps) => {
    filterForMaker(item.value as number);
    setEnterpriseActive(item.value as number);
    setTypeActive(0);
  };

  const filterForLicenceType = (typeId: number) => {
    let foundDataTypes: Product[] = [];
    if (!typeId || typeId === 0) {
      foundDataTypes = [...productsfilteredAux];
    } else {
      foundDataTypes = productsfilteredAux.filter((filterInfo) => filterInfo.productType.id === typeId);
    }
    setProductsfiltered(foundDataTypes);
  };

  const handleTypeChange = (event: React.SyntheticEvent<HTMLElement>, item: DropdownProps) => {
    filterForLicenceType(item.value as number);
    setTypeActive(item.value as number);
  };

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
              <Dropdown options={enterprises} value={enterpriseActive} onChange={handleEnterpriseChange} fluid selection placeholder={t('gettingStarted')} />
            </Grid.Column>
            <Grid.Column largeScreen={4} computer={4} tablet={8} mobile={8}>
              <Dropdown options={licenceTypes} value={typeActive} onChange={handleTypeChange} fluid selection placeholder="Licencias" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            {/* <Responsive as={Grid.Column} style={{ paddingRight: 0 }} largeScreen={3} computer={3} tablet={3} mobile={5} textAlign="left" minWidth={660} /> */}
            <Grid.Column largeScreen={16} computer={16} tablet={16} mobile={16}>
              <ProductList
                products={productsfiltered}
                // noDataMessage={'error'}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </PrivateLayout>
    </>
  );
};

export default Catalog;
