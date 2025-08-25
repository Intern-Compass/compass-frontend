export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        Sidebar goes here

        {children}
    </div>
  );
}
