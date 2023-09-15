import Button from "../components/Button";
import logo  from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    console.log('validateForm is called');
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await fetch('http://localhost:3000/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        toast.success('Login successfull!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        const success = await response.json();
        localStorage.setItem('userData', JSON.stringify(jwt(success.token)));
        // Successful login, redirect to home
        navigate('/home');
      } else {
        console.log(response);
        Swal.fire({
          title: 'Error!',
          text: 'Invalid email or password',
          icon: 'error',
        })
        // Handle login failure, show error message, etc.
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <div className="bg-white w-2/4 place-content-center text-black px-8 py-10 flex items-center justify-center flex-col rounded-2xl shadow-3xl">
            <img
              src={logo}
              alt="logo"
              width={200}
              height={200}
            />
            <span className='font-montserrat font-bold' style={{fontSize:'30px'}}>
              Login
            </span>

            <input
              type="text"
              placeholder='Email address'
              value={email}
              onChange={handleEmailChange}
              className={`w-4/5 border-4 p-2 rounded-md  outline-none ${errors.email ? 'border-rose-600' : 'mb-2'}`}
            />
            {errors.email && <p className="text-left text-red-500 mb-2">{errors.email}</p>}
            <input
              type="password" // Change type to 'password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              className={`w-4/5 border-4 p-2 rounded-md  outline-none ${errors.password ? 'border-rose-600' : 'mb-2'}`}
            />
            {errors.password && <p className="text-left text-red-500 mb-2">{errors.password}</p>} {/* Display password error message */}
            <p className="font-palanquin font-bold mb-8 text-gray-500 text-xl">
              Does not have an account? <span className="text-blue-900 cursor-pointer underline"><a href="/signup">Sign Up Now</a></span>
            </p>
            <Button
              label="Login"
            />
          </div>
        </div>
      </form>
      
    </>
  )
}

export default Login;
