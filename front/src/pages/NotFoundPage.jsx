import error from '../assets/images/error.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="place-content-center max-container flex flex-1 items-center justify-center flex-col min-h-screen">
      <img
        src={error}
        alt="404 error image"
        width={150}
        height={150}
      />
      <div className="font-palanquin text-3xl text-center">
        <h1 className='text-main-green'>Page not found</h1>
        <p className='font-montserrat'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
      <Link to="/">
        <Button
          label="Back to Homepage"
        />
        </Link>
    </div>
  )
}

export default NotFoundPage;