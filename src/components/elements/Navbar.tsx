import { Container } from "../shared/Container"

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
              <img />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  )
}