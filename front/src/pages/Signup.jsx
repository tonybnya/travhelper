import Button from "../components/Button";
import logo  from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [full_name, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateField = (fieldName, value) => {
    if (!value) {
      return `${fieldName} is required`;
    }

    // Add more validation rules as needed

    return ''; // No error message
  };
  const validateForm = () => {
    const newErrors = {};

    newErrors.email = validateField('Email', email);
    newErrors.username = validateField('Username', username);
    newErrors.full_name = validateField('Full Name', full_name);
    newErrors.password = validateField('Password', password);
    newErrors.confirm_password = validateField('Confirm Password', confirm_password);

    if (password !== confirm_password) {
      newErrors.confirm_password = 'Passwords do not match';
    }
    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };
  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch('http://localhost:3000/authentication/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name, username, email, password, confirm_password }),
      });
  
      if (response.ok) {
        const success = await response.json();
        Swal.fire({
          title: 'Welcome to travhelper!',
          text: success.message +  ' You can login now',
          icon: 'success',
        })
        // Successful login, you can redirect or perform other actions here
        navigate('/login');
      } else {
        const error = await response.json();
        Swal.fire({
          title: 'Error!',
          text: error.message,
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
              className='cursor-pointer hover:scale-110'
            />
          <h3 className='font-montserrat font-bold mb-4' style={{fontSize:'30px'}}>
            Signup
          </h3>
          <input
            type="text"
            placeholder='Full name'
            value={full_name}
            onChange={(e) => handleInputChange(e, setFullName)}
            className={`w-4/5 border-4 p-2 rounded-md  outline-none ${errors.full_name ? 'border-rose-600' : 'mb-2'}`}
          />
            {errors.full_name && <p className="text-left text-red-500 mb-2">{errors.full_name}</p>}
          
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => handleInputChange(e, setUsername)}
            className={`w-4/5 border-4 p-2 rounded-md  outline-none ${errors.username ? 'border-rose-600' : 'mb-2'}`}
          />
            {errors.username && <p className="text-left text-red-500 mb-2">{errors.username}</p>}

          <input
            type="email"
            placeholder='Email address'
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            className={`w-4/5 border-4 p-2 rounded-md  outline-none ${errors.email ? 'border-rose-600' : 'mb-2'}`}
          />
            {errors.email && <p className="text-left text-red-500 mb-2">{errors.email}</p>}

          <input
            type="password" // Change type to 'password'
            placeholder='Password'
            value={password}
            onChange={(e) => handleInputChange(e, setPassword)}
            className={`w-4/5 border-4 p-2 rounded-md  outline-none ${errors.password ? 'border-rose-600' : 'mb-2'}`}
          />
            {errors.password && <p className="text-left text-red-500 mb-2">{errors.password}</p>}

          <input
            type="password"
            placeholder='Confirm password'
            value={confirm_password}
            onChange={(e) => handleInputChange(e, setConfirmPassword)}
            className={`w-4/5 border-4 p-2 rounded-md  outline-none ${errors.confirm_password ? 'border-rose-600' : 'mb-2'}`}
          />
            {errors.confirm_password && <p className="text-left text-red-500 mb-2">{errors.confirm_password}</p>}

          <p className="font-palanquin font-bold mb-8 text-gray-500 text-xl">
            Already have an account? <span className="text-blue-900 cursor-pointer underline"><a href="/login">Login Now</a></span>
          </p>
          <Button
            label="Sign Up"
          />
        </div>
      </div>
    </form>
  </>
  )
}

export default Signup;