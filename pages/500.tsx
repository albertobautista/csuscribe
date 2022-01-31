import PublicLayout from '@templates/PublicLayout';

export default function NotFoundPage({
  statusCode = 500,
}: {
  statusCode?: number;
}) {
  return (
    <PublicLayout>
      <div className="text-center">
        🍄 Algo Salio mal Mensaje de error
        <span className="bg-gray-300 inline-block">
          ERRORCODE: {statusCode}
        </span>
        <button>Ir al inicio</button>
      </div>
    </PublicLayout>
  );
}
