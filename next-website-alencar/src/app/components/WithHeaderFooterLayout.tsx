import Header from "../components/header";
import Footer from "../components/footer";

export default function WithHeaderFooterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pt-16 pb-12 min-h-screen bg-gray-50">{children}</main>
      <Footer />
    </>
  );
}
