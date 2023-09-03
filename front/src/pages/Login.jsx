import Button from "../components/Button";
import google from '../assets/icons/google.svg';

const Login = () => {
  const bg = "bg-blue-900";
  const clr = "text-white";

  return (
    <div className="bg-white place-content-center text-black px-8 py-10 flex items-center justify-center flex-col rounded-2xl shadow-3xl min-h-screen">
      <h3 className='text-xl font-montserrat font-bold mt-8 mb-8'>
        Login
      </h3>

      <Button
        label="Login with Google"
        iconURL={google}
        bgColor={bg}
        textColor={clr}
        className="font-bold"
      />

      <span className="text-gray-500 font-palanquin font-bold my-10 text-xl">
        Or use your email address
      </span>

      <input
        type="text"
        placeholder='Email address'
        className='w-4/5 border-4 p-2 rounded-md mb-2 outline-none'
      />

      <input
        type="text"
        placeholder='Password'
        className='w-4/5 border-4 p-2 mb-8 rounded-md outline-none'
      />

      <p className="cursor-pointer font-palanquin font-bold underline mb-2 text-blue-900 text-xl">
        Forgot Password?
      </p>
      <p className="font-palanquin font-bold mb-8 text-gray-500 text-xl">
        Already have an account? <span className="text-blue-900 cursor-pointer underline">Sign Up Now</span>
      </p>

      <Button
        label="Submit"
      />
    </div>
  )
}

export default Login;