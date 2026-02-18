import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

/**
 * Main layout — includes header and footer.
 * All authenticated pages (home, about, pricing, docs, dashboard) use this.
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
