import logo  from '../assets/images/logo.svg';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const Navbar = () => {
  const userData = localStorage.getItem('userData');
  const navigate = useNavigate();
  const handleLogout = async () => {
    // Clear user data from localStorage
    Swal.fire({
      title: 'Logging you out...',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    }).then(() => {
      localStorage.removeItem('userData');
      toast.success('Logged out successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/home');
    });
  };
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
              { ['logout', 'home'].includes(item.label) && userData && <a href={item.label == 'home' ? "/home" : "#"} className="text-3xl font-palanquin leading-normal text-dark-bg capitalize" onClick={item.label == 'logout' && handleLogout}>{item.label}</a> }
              {
                !['logout', 'home'].includes(item.label) && !userData &&
                <a href={item.href} className="text-3xl font-palanquin leading-normal text-dark-bg capitalize">
                {item.label}
              </a>
              }

            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;