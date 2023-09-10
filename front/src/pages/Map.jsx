import GoogleMapReact from 'google-map-react';
import { boxes } from '../constants';
// import mapStyles from './mapStyles';

const Map = () => {
  const defaultProps = {
    target: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 10
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-4 gap-5 text-white font-palanquin">
        <div className="bg-dark col-span-1 p-4 h-[90vh] shadow-inner rounded-lg border-black border-4">
          Column 1
        </div>
        <div className="bg-dark-color col-span-1 p-4 rounded-lg border-4 border-black shadow-inner gap-2 flex items-start flex-wrap">
          {boxes.map((box) => (
            <button
              key={box.label}
              className='bg-white hover:bg-main-green cursor-pointer flex flex-auto justify-center items-center w-2/5 p-2 shadow-inner rounded-md gap-4'
            >
              <img
                src={box.src}
                alt={box.alt}
                width={25}
                height={25}
              />
              <span className='font-bold capitalize text-black text-xl'>
                {box.label}
              </span>
            </button>
          ))}
        </div>
        <div className="col-span-2 rounded shadow-inner border-4 border-black">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA-uAsEDeO66A0K0gMQ_T--ILbTI2aXws0' }}
            defaultCenter={defaultProps.target}
            center={defaultProps.target}
            defaultZoom={defaultProps.zoom}
            margin={[50, 50, 50, 50]}
            // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
            // onChange={''}
            // onChildClick={''}
          >
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Map;