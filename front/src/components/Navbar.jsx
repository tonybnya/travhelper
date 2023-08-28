import { logo } from '../assets/images';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header className="absolute py-8 px-8 Z-10 w-full">
      <nav className="flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          width={50}
          height={50}
        />
        <ul className="flex flex-1 justify-center items-center gap-4 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} text-lg font-montserrat leading-normal text-dark-bg>
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