import { InputBase  } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import { useJsApiLoader} from '@react-google-maps/api';
import {useState, useEffect, useRef } from 'react';
import { getPlacesData } from '../api/index';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import List from './List';
import Map from './Map';

const Information = () => {
    const classes = useStyles();
    const API_KEY = 'AIzaSyA-uAsEDeO66A0K0gMQ_T--ILbTI2aXws0';
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setchildClicked] = useState(null);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [filteredPlaces, setfilteredPlaces] = useState([]);
    const [autocomplete, setAutoComplete] = useState(null);
    const mapRef = useRef(null);
  
    const handleLoad = (map) => {
      mapRef.current = map;
    };
    const handleBoundsChanged = () => {
      if (mapRef.current) {
        const bounds = mapRef.current.getBounds();
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        const newBounds = {
          ne: { lat: ne.lat(), lng: ne.lng() },
          sw: { lat: sw.lat(), lng: sw.lng() },
        };
        setBounds(newBounds);
      }
    };
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({lat: latitude, lng: longitude});
      })
    }, []);
    useEffect(() => {
        const filteredPlaces = places?.filter((place) => place.rating >= rating);
        setfilteredPlaces(filteredPlaces);
    }, [places, rating])
    useEffect(() => {
      getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
        setPlaces(data);
        setfilteredPlaces([]);
      });
    }, [type, coordinates, bounds])
    
    const {isLoaded} = useJsApiLoader({
      googleMapsApiKey: API_KEY
    })
    if(!isLoaded) {
      return <h1>Loading...</h1>
    }
    const handleChildClick = (key) => {
        setchildClicked(key);
        console.log(`Child with key ${key} clicked`);
        // Add your custom logic here
      };
    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({lat, lng});
    }
    return (
      <div className="min-h-screen">
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput}}/>
                </div>
              </Autocomplete>
  
        <div className="grid grid-cols-4 gap-5 text-white font-palanquin">
          <div className="bg-dark-color col-span-2 p-4 rounded-lg border-4 border-black shadow-inner gap-4">
              <List 
                  places={filteredPlaces?.length ? filteredPlaces : places} 
                  childClicked={childClicked}
                  type={type}
                  setType={setType}
                  rating={rating}
                  setRating={setRating}
              />
          </div>
            <Map 
                setCoordinates={setCoordinates}
                coordinates={coordinates}
                childClicked={childClicked}
                setchildClicked={handleChildClick}
                places={filteredPlaces?.length ? filteredPlaces : places}
                onBoundsChanged={handleBoundsChanged}
                handleLoad={handleLoad}
                />
        </div>
      </div>
    );
}

export default Information