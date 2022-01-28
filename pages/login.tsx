import LoginLayout from '@templates/LoginLayout';
import Link from 'next/link';

export default function Page() {
  return (
    <LoginLayout>
      <Link href="/">Ir Al inicio</Link>
    </LoginLayout>
  );
}
