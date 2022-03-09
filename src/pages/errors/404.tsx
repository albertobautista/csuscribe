import PrivateLayout from '@templates/PrivateLayout';

export default function NotFoundPage() {
  return (
    <PrivateLayout title={'404'} pageDescription={'404'}>
      <div>
        🍂 Lo sentimos No se encontro el mensaje de error
        <button>Ir al inicio</button>
      </div>
    </PrivateLayout>
  );
}
