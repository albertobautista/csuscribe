import React from 'react';
import PublicHeader from '@components/Headers/PublicHeader';

type LayoutProps = { title?: string };

const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <PublicHeader />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PublicLayout;
