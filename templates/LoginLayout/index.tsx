import React from 'react';
import LoginHeader from '@components/Headers/LoginHeader';
import styles from '@styles/LoginLayout.module.css';

type LayoutProps = { title?: string };

const LoginLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-header']}>
        <LoginHeader />
      </div>
      <div className={styles['login-children']}>{children}</div>
    </div>
  );
};

export default LoginLayout;
