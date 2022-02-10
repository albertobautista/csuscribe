import PublicLayout from '@templates/PublicLayout';
import { useRouter } from 'next/router';
import React from 'react';

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;
  return <PublicLayout> SearchPage: {q}</PublicLayout>;
};

export default SearchPage;
