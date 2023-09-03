import logo  from '../assets/images/logo.svg';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="top-0 p-2 z-10 w-full">
      <nav className="flex justify-around items-center max-container border-b-4">
        <Link to='/'>
          <img
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className='cursor-pointer hover:scale-110'
          />
        </Link>
        <ul className="flex flex-1 justify-end items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-3xl font-palanquin leading-normal text-dark-bg capitalize">
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