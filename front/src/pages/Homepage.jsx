import { Button } from '../components/Button';
import logo from '../assets/images/logo.svg'

const Homepage = () => {
  return (
    <div className="w-full flex flex-1 justify-evenly items-center min-h-screen gap-10 max-container">
      <div
        className='flex flex-col justify-center w-full pt-10'>
        <p className='text-8xl font-palanquin text-white font-bold pt-8'>
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
        <p className='font-montserrat text-slate-gray text-xl w-2/5 leading-8 mt-4 mb-4 text-justify'>
           TravHelper is a web application designed to streamline the trip planning process for users. Whether you are planning a weekend getaway or a long vacation, TravHelper aims to provide a comprehensive solution for managing your travel itinerary. From booking air tickets to arranging local transportation, finding suitable accommodations, and even suggesting popular dining options, TravHelper has got you covered.
        </p>
      </div>

      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <img
          src={logo}
          alt="TravHelper logo"
        />

        <Button label="Submit" />
      </div>
    </div>
  )
}

export default Homepage;