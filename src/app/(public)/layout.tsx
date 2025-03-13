import { notFound } from 'next/navigation';

import { auth } from '@/lib/auth';
import { Navbar } from '@/app/_components/navbar';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) notFound();

  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
