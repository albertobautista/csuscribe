import PublicLayout from '@templates/PublicLayout';
import Link from 'next/link';

export default function Page() {
  return (
    <PublicLayout>
      <Link href="/login">IR AL LOGIN</Link>
      <Link href="/products">IR AL CATALOGO</Link>
    </PublicLayout>
  );
}
