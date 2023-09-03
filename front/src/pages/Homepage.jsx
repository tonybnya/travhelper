import Button from '../components/Button';
import logo from '../assets/images/logo.svg';
import { banner } from '../constants';

const Homepage = () => {
  return (
    <div className="w-full flex justify-evenly items-center min-h-screen gap-10 max-container">
      <div
        className='flex flex-col justify-center w-full pt-10'>
        <p className='text-8xl font-palanquin text-white font-bold'>
          {/* TravHelper */}
          {banner.title}
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
           {/* TravHelper is a web application designed to streamline the trip planning process for users. Whether you are planning a weekend getaway or a long vacation, TravHelper aims to provide a comprehensive solution for managing your travel itinerary. From booking air tickets to arranging local transportation, finding suitable accommodations, and even suggesting popular dining options, TravHelper has got you covered. */}
           {banner.text}
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
          Enter your request
        </h3>
        <input
          type="text"
          placeholder='From'
          className='w-4/5 border-4 p-2 rounded-md mb-2 outline-none'
        />
        <input
          type="text"
          placeholder='To'
          className='w-4/5 border-4 p-2 mb-8 rounded-md outline-none'
        />

        <Button
          label="Submit"
        />
      </div>
    </div>
  )
}

export default Homepage;