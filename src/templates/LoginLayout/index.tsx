import React from 'react';
import LoginHeader from '@components/Headers/LoginHeader';
import styles from './LoginLayout.module.css';

const LoginLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_header}>
        <LoginHeader />
      </div>
      <div className={styles.login_children}>{children}</div>
    </div>
  );
};

export default LoginLayout;
