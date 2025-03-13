export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={'container max-w-7xl pb-5'}>
      <div className="flex justify-center">{children}</div>
    </main>
  );
}
