import { NextPage } from 'next';
import NotFound from './404';
import ServerError from './500';
import PublicLayout from '@templates/PublicLayout';

type ErrorPageProps = {
  statusCode?: number;
  message?: string;
};

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode, message }) => {
  console.log('AAAAA', statusCode);
  if (typeof statusCode === 'number' && statusCode === 404) {
    console.log('AAAAA IF', statusCode);

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
    <PublicLayout>
      <div className="text-center">
        🦦 Doh!
        {errorMessage}
        {!statusCode ? null : (
          <span className="bg-gray-300 inline-block">
            ERRORCODE: {statusCode}
          </span>
        )}
        <button>Ir al Home</button>
      </div>
    </PublicLayout>
  );
};
ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default ErrorPage;
