import PrivateLayout from '@templates/PrivateLayout';

export default function NotFoundPage({ statusCode = 500 }: { statusCode?: number }) {
  return (
    <PrivateLayout>
      <div>
        🍄 Algo Salio mal Mensaje de error
        <span>ERRORCODE: {statusCode}</span>
        <button>Ir al inicio</button>
      </div>
    </PrivateLayout>
  );
}
