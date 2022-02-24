import { NextPage } from 'next';
import NotFound from './errors/404';
import ServerError from './errors/500';
import PrivateLayout from '@templates/PrivateLayout';

type ErrorPageProps = {
  statusCode?: number;
  message?: string;
};

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode, message }) => {
  if (typeof statusCode === 'number' && statusCode === 404) {
    return <NotFound />;
  }

  if (typeof statusCode === 'number' && statusCode > 500) {
    return <ServerError statusCode={statusCode} />;
  }

  let errorMessage = message;
  if (!message) {
    errorMessage = statusCode ? 'Error en servidor' : 'Error en cliente';
  }

  return (
    <PrivateLayout>
      <div>
        🦦 Doh!
        {errorMessage}
        {!statusCode ? null : <span>ERRORCODE: {statusCode}</span>}
        <button>Ir al Home</button>
      </div>
    </PrivateLayout>
  );
};
ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default ErrorPage;
