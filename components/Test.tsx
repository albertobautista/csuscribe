import React from 'react';
import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation(['common']);

  return <div>{t('imagesFrom')}</div>;
};

export default Test;
