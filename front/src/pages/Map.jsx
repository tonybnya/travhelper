import GoogleMapReact from 'google-map-react';
// import {boxes} from '../constants';
import { AppBar, Toolbar, Typography, InputBase, Box, Paper  } from '@material-ui/core';
// import { Autocomplete } from '@material-ui/lab';
import {useState, useEffect} from 'react';
import { getPlacesData } from '../api/index';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import List from './List';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import useMediaQuery from '@material-ui/core/useMediaQuery'; // For Material-UI
import Rating from '@material-ui/lab/Rating';

const Marker = ({ name }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>{console.log(name)}{name}</div>
);
const Map = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');
  const [childClicked, setChildClicked] = useState(null);

  const API_KEY = 'AIzaSyA-uAsEDeO66A0K0gMQ_T--ILbTI2aXws0';
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);
  
  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
    });
  }, [coordinates, bounds])
  return (
    <div className="min-h-screen">
      {/* <AppBar position='static'> */}
            {/* <Autocomplete> */}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput}}/>
              </div>
            {/* </Autocomplete> */}
      {/* </AppBar> */}

      <div className="grid grid-cols-4 gap-5 text-white font-palanquin">
        <div className="bg-dark-color col-span-2 p-4 rounded-lg border-4 border-black shadow-inner gap-4">
          <List places={places} childClicked={childClicked}/>
        </div>
        <div className="col-span-2 rounded shadow-inner border-4 border-black">
            <GoogleMapReact 
              bootstrapURLKeys={{key:API_KEY}}
              defaultCenter={coordinates}
              center={coordinates}
              defaultZoom={14}
              margin={[50, 50, 50, 50]}
              options={''}
              onChange={(e) => {
                setCoordinates({lat: e.center.lat, lng: e.center.lng});
                setBounds({ne:e.marginBounds.ne, sw: e.marginBounds.sw});
              }}
              onChildClick={(child) => {
                setChildClicked(child)
              }}
            >
              {places?.map((place, i) => (
                <Marker
                key={i}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                name={place.name}
                >
                    {
                      isDesktop ? (
                        <LocationOnOutlinedIcon color='primary' fontSize='large' /> 
                      ) : (
                        <Paper elevation={3} className={classes.paper}>
                          <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                            {place.name}
                          </Typography>
                          <img className={classes.pointer}
                              src={place.photo? place.photo.images.large.url : 'https://planetcode.in/assets/images/default-image-png-9-300x200.png'}
                              alt={place.name}
                          />
                          <Rating size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                      )
                    }
                </Marker>
              ))}
            </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Map;