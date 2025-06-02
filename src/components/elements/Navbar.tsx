import { Container } from "../shared/Container"
// import Logo from '../../assets/'

const navItems = [
  {href: "#", text: 'Home'},
  {href: "#services", text: 'Services'},
  {href: "#about-us", text: 'About Us'},
  {href: "#features", text: 'Features'},
]

export const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src="" alt="EriLabs" className="w-10 h-10"/>
              <div className="inline-flex text-lg font-semibold heading-1">
                EriLabs
              </div>
            </a> 
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                          absolute top-full left-0 lg:static lg:top-0 bg-color lg:bg-transparent border-x box-border lg-border-x-0 lg:h-auto">
              <ul className="border-t box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 
                             flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg heading-2 w-full lg:justify-center lg:items-center">
              </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}