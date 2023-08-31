import logo  from '../assets/images/logo.svg';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header className="relative flex h-16 items-center justify-between">
      <nav className="flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          width={70}
          height={70}
        />
        <ul className="flex flex-1 justify-center items-center gap-4 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-lg font-montserrat leading-normal text-dark-bg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;