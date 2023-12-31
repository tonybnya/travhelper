import Button from '../components/Button';
import logo from '../assets/images/logo.svg';
import { ToastContainer } from 'react-toastify';
import { InputBase  } from '@material-ui/core';
import {useState } from 'react';
import Swal from 'sweetalert2';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import useStyle from './styles';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const userData = localStorage.getItem('userData');
  const navigate = useNavigate();
  const classes = useStyle();
  const handleSubmit = () => {
      onPlaceChanged()
  }
  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    if (userData) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      navigate('/map',{ state: {lat, lng} });
    }
    else {
      Swal.fire({
        title: 'You don\'t have access!',
        text: 'You need to login or sign up first to explore the city that you want to travel to...',
        icon: 'error',
      })
      navigate('/login')
    }
  }
  return (
    <>
    <ToastContainer />
    <form onSubmit={handleSubmit}>
    <div className="w-full flex justify-evenly items-center gap-10 max-container">
      <div
        className='flex flex-col justify-center w-full'>
        <p className='text-8xl font-palanquin text-white font-bold'>
          TravHelper
        </p>
        <h1 className='mt-2 text-main-green font-palanquin text-[40px] font-bold'>
          <span className=''>Discover</span>
          <span className="text-6xl">. </span>
          <span className='inline-block'>Plan</span>
          <span className="text-6xl">. </span>
          <span className='inline-block'>Experience</span>
          <span className="text-6xl">. </span>
        </h1>
        <p className='font-montserrat text-slate-gray text-xl leading-8 mt-4 mb-4 text-justify'>
        TravHelper is a web application designed to streamline the trip planning process for users. Whether you are planning a weekend getaway or a long vacation, TravHelper aims to provide a comprehensive solution for managing your travel itinerary. From booking air tickets to arranging local transportation, finding suitable accommodations, and even suggesting popular dining options, TravHelper has got you covered.
        </p>
      </div>

      <div className="bg-white w-4/5 text-black px-8 py-10 flex items-center justify-center flex-col rounded-2xl shadow-3xl">
        <img
          src={logo}
          alt="logo"
          width={90}
          height={90}
          className='cursor-pointer hover:scale-110'
        />
        <h3 className='text-xl font-montserrat font-bold mt-8 mb-8'>
          Enter your travel itinerary
        </h3>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput}}/>
          </div>
        </Autocomplete>
        <Button
          label="Submit"
        />
      </div>
    </div>
    </form>
    </>
  )
}

export default Homepage;
