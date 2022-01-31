import PublicLayout from '@templates/PublicLayout';
import Link from 'next/link';

export default function Page() {
  return (
    <PublicLayout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{' '}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
      <Link href="/login">IR AL LOGIN</Link>
      <Link href="/catalog">IR AL CATALOGO</Link>
    </PublicLayout>
  );
}
