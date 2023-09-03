import GoogleMapReact from 'google-map-react';
import boxes from '../constants';

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
      <div className="grid grid-cols-4 gap-5 pt-40 px-10 text-white font-palanquin">
        <div className="bg-dark col-span-1 p-4 h-[90vh] shadow-inner rounded-lg border-black border-4">
          Column 1
        </div>
        <div className="bg-dark-green col-span-1 p-4 rounded-lg border-4 border-black shadow-inner">
          {boxes.map((box) => (
            <div
              key={box.label}
              className='flex w-4 h-2 justify-center items-center rounded-md shadow-inner bg-black text-white'
            >
              <img
                src={box.src}
                alt={box.alt}
                width={25}
                height={25}
              />
              <span className='font-bold capitalize text-main-green'>
                {box.label}
              </span>
            </div>
          ))}
        </div>
        <div className="col-span-2 rounded shadow-inner border-4 border-black">
          <h3>Map</h3>
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