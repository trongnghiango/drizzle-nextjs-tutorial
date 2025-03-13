import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
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
      <div className="space-y-3">
        <Button asChild variant="ghost">
          <Link href="/admin">Profile</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/admin/posts">Posts</Link>
        </Button>
        {children}
      </div>
    </main>
  );
}
