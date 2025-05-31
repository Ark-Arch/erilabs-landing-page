
interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({title, children}:LayoutProps) => {

  return (
    <>
      <Navbar/>
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer/>
    </>
  )
}