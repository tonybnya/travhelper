import GoogleMapReact from 'google-map-react';
import {boxes} from '../constants';

const Map = () => {
  const API_KEY = 'AIzaSyA-uAsEDeO66A0K0gMQ_T--ILbTI2aXws0';
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
        <div className="bg-dark-color col-span-1 p-4 rounded-lg border-4 border-black shadow-inner justify-center flex flex-wrap gap-4">
          {boxes.map((box) => (
            <button
              key={box.label}
              className='bg-white cursor-pointer flex justify-center items-center w-2/5 h-10 p-2 shadow-inner rounded-md gap-2'
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
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={defaultProps.target}
            center={defaultProps.target}
            defaultZoom={defaultProps.zoom}
            margin={[50, 50, 50, 50]}
            // options={''}
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