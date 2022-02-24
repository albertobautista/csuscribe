import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PrivateLayout from '@templates/PrivateLayout';
import { useTranslation } from 'next-i18next';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale!);

  return {
    props: { ...i18n },
  };
};
const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const { t } = useTranslation('common');

  return (
    <PrivateLayout>
      {t('search')}: {q}
    </PrivateLayout>
  );
};

export default SearchPage;
